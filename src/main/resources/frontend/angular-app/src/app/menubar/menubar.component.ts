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
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
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
      },
      {
        label: 'Investment',
        icon: 'pi pi-inbox',
      }
    ];
  }

}
