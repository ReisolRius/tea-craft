import { Component } from '@angular/core';
import { MenuService } from './header-service/menu.service';
import { MenuItem } from './header-service/menu-item';
import { MENU } from './header-service/menu';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  selectedMenuItemId?: string;

  menuItems: MenuItem[] = [];

  menuFlag: boolean = false;

  goRegister: boolean = true;
  goLogin: boolean = false;

  backFlag: boolean = false;

  constructor(private menuService: MenuService) {
    this.selectedMenuItemId = 'modpacks';
  }

  getLinks(): void {
    this.menuItems = this.menuService.getLinks();
  }

  ngOnInit(): void {
    this.getLinks();
  }

  onSelect(menuItemId:string): void {
    this.selectedMenuItemId = menuItemId;
  }

  goClear(): void {
    this.selectedMenuItemId = '';
    this.goRegister = !this.goRegister;
    this.goLogin = !this.goLogin;
  }

  openMenu() {
    this.menuFlag = !this.menuFlag;
  }

}
