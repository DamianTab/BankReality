import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-estimate',
  templateUrl: './emi-estimate.component.html',
  styleUrls: ['./emi-estimate.component.scss']
})
export class EmiEstimateComponent implements OnInit {

  loanAmount: number;
  interestRate: number;
  loanTime: number;

  constructor() { }

  ngOnInit() {
  }

}
