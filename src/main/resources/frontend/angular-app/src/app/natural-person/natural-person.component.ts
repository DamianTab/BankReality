import { Component, OnInit } from '@angular/core';
import { NaturalPerson } from './model/natural-person';
import { NaturalPersonService } from './service/natural-person.service';

@Component({
  selector: 'bk-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent implements OnInit {

  displayDialog: boolean;

  tempEntity: NaturalPerson = new NaturalPerson();

  selectedEntity: NaturalPerson;

  isNew: boolean;

  entityArray: NaturalPerson[] = new Array();

  cols: any[];

  constructor(private entityService: NaturalPersonService) { }

  ngOnInit() {
    this.entityService.getAll().subscribe(entities => {
      this.entityArray = entities;
    });


    this.cols = [
      { field: 'login', header: '1' },
      { field: 'address', header: '2' },
      { field: 'phoneNumber', header: '3' },
      { field: 'name', header: '4' },
      { field: 'surname', header: '5' },
      { field: 'idCard', header: '6' },
    ];
  }

  showDialogToAdd() {
    this.isNew = true;
    this.tempEntity = new NaturalPerson();
    this.displayDialog = true;
  }

  save() {
    const entities = [...this.entityArray];
    if (this.isNew) {
      const temp = this.tempEntity;
      this.entityService.create(temp).subscribe(id => {
        temp.login = id;
        this.entityArray.push(temp);
      });
    } else {
      const temp = this.tempEntity;
      const selected = this.selectedEntity;
      this.entityService.edit(temp).subscribe(() => {
        entities[this.entityArray.indexOf(selected)] = temp;
      });
    }
    this.entityArray = entities;
    this.tempEntity = null;
    this.displayDialog = false;
  }

  delete() {
    if (!this.isNew) {
      const index = this.entityArray.indexOf(this.selectedEntity);
      this.entityService.delete(this.selectedEntity.login).subscribe(() => {
        this.entityArray = this.entityArray.filter((val, i) => i != index);
      });
    }
    this.tempEntity = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNew = false;
    this.tempEntity = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  private cloneCar(c: NaturalPerson): NaturalPerson {
    let entity = new NaturalPerson();
    for (let prop in c) {
      entity[prop] = c[prop];
    }
    return entity;
  }

}
