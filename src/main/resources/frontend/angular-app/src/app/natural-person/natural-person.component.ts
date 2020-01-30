import { Component, OnInit } from '@angular/core';
import { NaturalPerson } from './model/natural-person';
import { NaturalPersonService } from './service/natural-person.service';
import { element } from 'protractor';
import { EntityFormComponent } from "../shared/component/entity-form/entity-form.component";
import { EntityService } from '../shared/service/entity.service';

@Component({
  selector: 'bk-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent extends EntityFormComponent<NaturalPerson> {

  tempEntity = new NaturalPerson();
  cols = [
    { field: 'login', header: 'Login' },
    { field: 'address', header: 'Address' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'name', header: 'Name' },
    { field: 'surname', header: 'Surname' },
    { field: 'idCard', header: 'Id Card' },
  ];

  constructor(private entityServiceSpecific: EntityService<NaturalPerson>) {
    super(entityServiceSpecific);
  }
}
