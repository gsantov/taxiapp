import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MenuModel } from '../models/menu.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showSidebar?:boolean;
  coopName?:string;

  menu:Array<MenuModel> = [
    {
      id: 1,
      name: 'Administracion',
      active: false,
      route: '/admin'
    },
    {
      id: 2,
      name: 'Coperativa',
      active: false,
      route: '/coperativa',
      opened: false,
      children: [
        {
          id: 2.1, 
          name: 'Perfil',
          active: false,
          route: '/coperativa/profile',
        },
        {
          id: 2.2, 
          name: 'Conductores',
          active: false,
          route: '/coperativa/drivers',
        }
      ]
    }
  ]

  constructor(private router: Router, public userService:UserService) {}

  ngOnInit(): void {
    this.menu.forEach(elem => {
      if(this.router.url.includes(elem!.route!)){
        elem.active = true;
        elem.opened = true;
        if(elem.children){
          elem.children.forEach(hijo => hijo.active = this.router.url.includes(hijo!.route!));
        }
      }
    });
    this.showSidebar = window.innerWidth < 680;


  }

  clickMenu(menuItem:MenuModel, submenuItem?:MenuModel){
    this.menu.forEach((elem) => elem.active = elem.id === menuItem.id);
    if(submenuItem){
      menuItem!.children!.forEach(elem => elem.active = elem.id === submenuItem.id);
      this.router.navigate([submenuItem!.route]);
    } else {
      // pongo inactivo sub menu
      this.router.navigate([menuItem!.route]);
      if(menuItem.children){
        // cierro si hay otro abierto
        menuItem.children.forEach(elem => elem.active = false)
      }
    }
    this.menu.forEach(elem => elem.opened = false)
    menuItem.opened = true;
  }

  openSubMenu(menuItem:MenuModel){
    menuItem.opened = !menuItem.opened;
  }

  togleSidebar(){
    this.showSidebar = !this.showSidebar;
  }

  onResize(event:any) {
    if(event.target.innerWidth < 679){
      this.showSidebar = event.target.innerWidth < 680;
    }
    
  }

}
