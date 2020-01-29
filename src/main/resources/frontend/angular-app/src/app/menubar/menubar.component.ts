import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'bk-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Natural Person',
        icon: 'pi pi-user',
        routerLink: ['/natural']
      },
      {
        label: 'Legal Person',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'Account',
        icon: 'pi pi-id-card',
      },
      {
        label: 'Bank Transfer',
        icon: 'pi pi-arrow-right',
      },
      {
        label: 'Credit',
        icon: 'pi pi-dollar',
        items: [
          { label: 'List', icon: 'pi pi-align-left'},
          { label: 'Estimate EMI', icon: 'pi pi-chart-line', routerLink: ['/credit/emi']},
        ]
      },
      {
        label: 'Investment',
        icon: 'pi pi-inbox',
      }
    ];
  }

}
