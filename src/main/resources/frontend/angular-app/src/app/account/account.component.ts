import { Component, OnInit } from '@angular/core';
import { Account } from './model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  url = '/account';
  entityName = 'Account';
  tempEntity = new Account();
  cols = [
    { field: 'accountNumber', header: 'Account Number' },
    { field: 'balance', header: 'Balance' },
    { field: 'feesAmount', header: 'Fees Amount' },
    { field: 'creationDate', header: 'Creation Date' },
    { field: 'clientId', header: 'Client ID' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
