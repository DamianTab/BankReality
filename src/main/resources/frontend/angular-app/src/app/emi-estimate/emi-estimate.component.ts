import { Component, OnInit } from '@angular/core';
import { EmiEstimateService } from './service/emi-estimate.service';

@Component({
  selector: 'app-emi-estimate',
  templateUrl: './emi-estimate.component.html',
  styleUrls: ['./emi-estimate.component.scss']
})
export class EmiEstimateComponent implements OnInit {

  numberRegex: RegExp = /[0-9]+/;

  loanAmount: number;
  interestRate: number;
  loanTime: number;
  emi: number;

  constructor(private emiService: EmiEstimateService) { }

  ngOnInit() {
  }

  calculateEmi() {
    this.emiService.estimateEmi(this.loanAmount, this.interestRate, this.loanTime).subscribe(( value => {
      this.emi = value;
    }));
  }

}
