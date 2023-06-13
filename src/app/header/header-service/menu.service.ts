import { Injectable } from '@angular/core';
import { MENU } from './menu';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getLinks(): MenuItem[] {
    return MENU;
  }

  constructor() { }
}
