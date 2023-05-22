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

  {
    state: 'product',
    name: 'manage product',
    type: 'link',
    icon: 'inventory',
    role: 'admin',
  },
  {
    state: 'order',
    name: 'manage order',
    type: 'link',
    icon: 'shopping-cart',
    role: '',
  },
  {
    state: 'user',
    name: 'manage user',
    type: 'link',
    icon: 'user',
    role: '',
  },
];

@Injectable()
export class MenuItems {
  getMenuItem(): Menu[] {
    return MENUITEM;
  }
}
