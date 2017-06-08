import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'health',
    name: 'Gesundheit',
    type: 'link',
    icon: 'healing'
  },
  {
    state: 'book',
    name: 'Buchen',
    type: 'link',
    icon: 'today'
  },
  {
    state: 'profil',
    name: 'Profil',
    type: 'link',
    icon: 'person'
  },
  {
    state: 'settings',
    name: 'Einstellungen',
    type: 'link',
    icon: 'settings'
  },

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
