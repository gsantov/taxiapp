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
    }
  ]

  constructor(private router: Router, private element: ElementRef) {}

  ngOnInit(): void {
    this.menu.forEach(elem => elem.active = elem.route === this.router.url );
  }

  clickMenu(id:number){
    this.menu.forEach((elem) => elem.active = elem.id === id );
    let selected = this.menu.find(elem => elem.id === id);
    this.router.navigate([selected!.route]);
  }

  togleSidebar(){
    this.showSidebar = !this.showSidebar;
  }

  onResize(event:any) {
    this.showSidebar = event.target.innerWidth < 680;
  }

}
