import { Component, OnInit } from '@angular/core';
import { MenuList } from './menu-list.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isCollapse = true;

  menuList: MenuList[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'icon-speedometer menu-icon',
    },
    {
      id: 'products',
      title: 'Produtos',
      route: '/products',
      icon: 'icon-speedometer menu-icon',

      subMenu: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          route: '/dashboard',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
