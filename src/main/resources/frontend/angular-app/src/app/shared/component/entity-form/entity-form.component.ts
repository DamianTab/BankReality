import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../service/entity.service';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent<T extends DbEntity<T>> implements OnInit {

  // Manually
  tempEntity: T;
  cols: any[];


  displayDialog: boolean;


  selectedEntity: T;

  isNew: boolean;

  entityArray: T[] = new Array();


  colsSizeArray: any;

  entityName: string = 'Natural Person';

  constructor(private entityService: EntityService<T>) {
  }

  ngOnInit() {
    this.entityService.getAll().subscribe(entities => {
      this.entityArray = entities;
    });

    console.log(this.cols[1].field);
    this.colsSizeArray = Array(this.cols.length).fill(1).map((x, i) => i); // [0,1,2,3,4]
  }


  showDialogToAdd() {
    this.isNew = true;
    this.tempEntity = this.tempEntity.getNewObject();
    this.displayDialog = true;
  }

  save() {
    const entities = [...this.entityArray];
    if (this.isNew) {
      const temp = this.tempEntity;
      this.entityService.create(temp).subscribe(id => {
        if (temp['id']) temp['id'] = id;
        else if (temp['accountNumber']) temp['accountNumber'] = id;
        else temp['login'] = id;
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
      this.entityService.delete(this.selectedEntity).subscribe(() => {
        this.entityArray = this.entityArray.filter((val, i) => i != index);
      });
    }
    this.tempEntity = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.isNew = false;
    this.tempEntity = this.cloneEntity(event.data);
    this.displayDialog = true;
  }

  isEquals(element, element2) {
    return element === element2;
  }

  private cloneEntity(c: T): T {
    let entity = this.tempEntity.getNewObject();
    for (let prop in c) {
      entity[prop] = c[prop];
    }
    return entity;
  }

}
