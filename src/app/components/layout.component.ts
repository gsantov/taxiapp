import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MenuModel } from '../models/menu.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showSidebar?:boolean;
  imgSrc = 'https://images.unsplash.com/photo-1647222427798-e27b4240e98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80';
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

  constructor(private router: Router, private element: ElementRef) {}

  ngOnInit(): void {
    console.log('this.router.url', this.router.url);
    
    this.coopName = 'Nombre Cooperativa 12345 final';

    let asd = 'Nombre Cooperativa 12345 final'
    console.log('includes', this.coopName.includes('Nombre Cooperativa 12345 final'));
    

    this.menu.forEach(elem => {
      console.log(elem!.route!, this.router.url.includes(elem!.route!));
      
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
      this.router.navigate([menuItem!.route]);
    }
    if(menuItem.children){
      // cierro si hay otro abierto
    }this.menu.forEach(elem => elem.opened = false)
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
