import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DriverModel } from 'src/app/models/diver.model';

@Component({
  selector: 'app-cooperative-drivers',
  templateUrl: './cooperative-drivers.component.html',
  styleUrls: ['./cooperative-drivers.component.css'],
})
export class CooperativeDriversComponent implements OnInit {

  @ViewChild('driversTable') driversTable: Table | undefined;
  driverList:Array<DriverModel> = [];

  constructor() { }

  ngOnInit(): void {
    this.driverList = [
      {
        driverName: 'Andrea Albuja',
        driverDocumentNumber: '14785023697',
        driverAddress: 'Cotocollao',
        driverPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        driverBloodType: 'A+',
        driverNationality: 'Ecuatoriano',
        driverAge: 42,
        carBrand: 'Nissan',
        carModel: 'Sentra',
        carLicensePlate: 'PEL-8541',
        carYear: 2005
      },
      {
        driverName: 'Pedro Pablo Perlaza',
        driverDocumentNumber: '08785023697',
        driverAddress: 'San Roque',
        driverPhoto: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        driverBloodType: 'B-',
        driverNationality: 'Ecuatoriano',
        driverAge: 35,
        carBrand: 'Chevrolet',
        carModel: 'Aveo',
        carLicensePlate: 'GPR-7884',
        carYear: 2017
      },
      {
        driverName: 'Roris Aragon',
        driverDocumentNumber: '08884530147',
        driverAddress: 'Condado',
        driverPhoto: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
        driverBloodType: 'A-',
        driverNationality: 'Ecuatoriano',
        driverAge: 35,
        carBrand: 'Hyundai',
        carModel: 'Accent',
        carLicensePlate: 'PBR-5584',
        carYear: 2013
      },
      {
        driverName: 'Antonio Valencia',
        driverDocumentNumber: '1785203641',
        driverAddress: 'La Carolina',
        driverPhoto: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        driverBloodType: 'A+',
        driverNationality: 'Ecuatoriano',
        driverAge: 35,
        carBrand: 'Chery',
        carModel: 'Arizo 3',
        carLicensePlate: 'PXY-5399',
        carYear: 2019
      }
    ]
  }

  applyFilterGlobal($event:Event, stringVal:string) {
    this.driversTable?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  
}
