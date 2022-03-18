import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser?:UserModel;

  constructor() { 
    this.currentUser = new UserModel();
    this.currentUser.enterprise = {
      name: 'Taxi 23 de Junio',
      ruc: '124567891001',
      address: 'Santa teresa N45-133 y Vicente Lopez',
      phoneNumber: '(02) 2494917',
      mobileNumber: '0998445632',
      profileImage: 'https://images.unsplash.com/photo-1647222427798-e27b4240e98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      backgroundImage: 'https://images.unsplash.com/photo-1478361000558-6f397482ffbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
    }
  }
}
