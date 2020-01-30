import { Component, OnInit } from '@angular/core';
import { LegalPerson } from './model/legal-person';

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.scss']
})
export class LegalPersonComponent implements OnInit {


  url = '/legal';
  entityName = 'Legal Person';
  tempEntity = new LegalPerson();
  cols = [
    { field: 'login', header: 'Login' },
    { field: 'address', header: 'Address' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'nip', header: 'Nip' },
    { field: 'companyName', header: 'Company Name' },
    { field: 'companyType', header: 'Company Type' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
