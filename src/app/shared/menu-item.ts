import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  role: string;
}
const MENUITEM = [
  {
    state: 'dashboard',
    name: 'dashboard',
    type: 'link',
    icon: 'dashboard',
    role: 'admin',
  },
  {
    state: 'category',
    name: 'manage category',
    type: 'link',
    icon: 'category',
    role: 'admin',
  },
];

@Injectable()
export class MenuItems {
  getMenuItem(): Menu[] {
    return MENUITEM;
  }
}
