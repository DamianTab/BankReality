import { Component, OnInit } from '@angular/core';
import { Investment } from './model/investment';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {


  url = '/investment';
  entityName = 'Investment';
  tempEntity = new Investment();
  cols = [
    { field: 'id', header: 'Investment Id' },
    { field: 'depositAmount', header: 'Deposit Amount' },
    { field: 'expirationDate', header: 'Date of expiration' },
    { field: 'aer', header: 'AER' },
    { field: 'accountId', header: 'Account Owner Id' },
  ];

  constructor() { }

  ngOnInit() {
  }
}
