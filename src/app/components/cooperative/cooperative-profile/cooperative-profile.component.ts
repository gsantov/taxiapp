import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterpriseModel } from 'src/app/models/enterprise.model';
import { UserService } from 'src/app/services/service/user.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-cooperative-profile',
  templateUrl: './cooperative-profile.component.html',
  styleUrls: ['./cooperative-profile.component.css']
})
export class CooperativeProfileComponent implements OnInit {

  empresa:EnterpriseModel;
  currentEnterprise?:EnterpriseModel;

  edit:boolean;
  profileForm:FormGroup;
  

  constructor(public toastService: ToastService, public userService:UserService) { 
    this.edit = false;
    this.empresa = {
      name: 'Taxi 23 de Junio',
      ruc: '124567891001',
      address: 'Santa teresa N45-133 y Vicente Lopez',
      phoneNumber: '(02) 2494917',
      mobileNumber: '0998445632'
    }

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      ruc: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.profileForm.setValue({
      name: 'Taxi 23 de Junio',
      ruc: '124567891001',
      address: 'Santa teresa N45-133 y Vicente Lopez',
      phoneNumber: '(02) 2494917',
      mobileNumber: '0998445632'
    })
  }

  editProfile(){
    // copy current info
    this.currentEnterprise = Object.assign({}, this.empresa)
    this.edit = true;
  }

  saveProfile(){
    this.edit = false;
    this.toastService.showSuccess('Guardado exitosamente');
  }

  cancelEdit(){
    this.empresa = Object.assign({}, this.currentEnterprise)
    this.edit = false;
  }

}
