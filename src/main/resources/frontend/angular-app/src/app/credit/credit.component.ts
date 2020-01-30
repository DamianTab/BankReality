import { Component, OnInit } from '@angular/core';
import { Credit } from './model/credit';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  url = '/credit';
  entityName = 'Credit';
  tempEntity = new Credit();
  cols = [
    { field: 'id', header: 'Id' },
    { field: 'loanAmount', header: 'Loan Amount' },
    { field: 'interestRate', header: 'Percentage Interest Rate' },
    { field: 'loanTime', header: 'Loan Time (Months)' },
    { field: 'emi', header: 'EMI' },
    { field: 'clientId', header: 'Client Id' },
    { field: 'accountId', header: 'Account Id' },
  ];

  constructor() { }

  ngOnInit() {
  }



}
