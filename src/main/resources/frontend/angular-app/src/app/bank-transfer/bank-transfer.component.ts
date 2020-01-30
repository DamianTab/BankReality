import { Component, OnInit } from '@angular/core';
import { BankTransfer } from './model/bank-transfer';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {


  url = '/transfer';
  entityName = 'Bank Transfer';
  tempEntity = new BankTransfer();
  cols = [
    { field: 'id', header: 'Transfer Id' },
    { field: 'transferAmount', header: 'Transfer Amount' },
    { field: 'transferDate', header: 'Date of Transfer' },
    { field: 'senderId', header: 'Sender Account Id' },
    { field: 'receiverId', header: 'Receiver Account Id' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
