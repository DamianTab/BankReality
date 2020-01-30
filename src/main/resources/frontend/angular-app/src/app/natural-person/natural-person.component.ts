import { Component, OnInit } from '@angular/core';
import { NaturalPerson } from './model/natural-person';

@Component({
  selector: 'bk-natural-person',
  templateUrl: './natural-person.component.html',
  styleUrls: ['./natural-person.component.scss']
})
export class NaturalPersonComponent {

  url = '/natural';
  entityName = 'Natural Person';
  tempEntity = new NaturalPerson();
  cols = [
    { field: 'login', header: 'Login' },
    { field: 'address', header: 'Address' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'name', header: 'Name' },
    { field: 'surname', header: 'Surname' },
    { field: 'idCard', header: 'Id Card' },
  ];

  constructor() {
  }
}
