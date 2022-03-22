import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { DriverModel } from 'src/app/models/diver.model';
import { CooperativeService } from 'src/app/services/cooperative/cooperative.service';

@Component({
  selector: 'app-cooperative-drivers',
  templateUrl: './cooperative-drivers.component.html',
  styleUrls: ['./cooperative-drivers.component.css'],
})
export class CooperativeDriversComponent implements OnInit {

  @ViewChild('driversTable') driversTable: Table | undefined;
  driverList: Array<DriverModel> = [];
  rows = 4;
  modalNew: boolean = false;
  modalHeader: string = 'Nuevo conductor';
  driverForm?: FormGroup;
  originalDriver?: DriverModel;
  submitted: boolean = false;

  bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']

  constructor(private cooperativeService: CooperativeService) {
    this.resetForm();
  }

  async ngOnInit() {
    this.driverList = await lastValueFrom(this.cooperativeService.getAllDrivers());
    this.driverList.forEach(elem => elem.driverAge = this.getAge(elem.driverBirth))
  }

  applyFilterGlobal($event: Event, stringVal: string) {
    this.driversTable?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  openModal(driver?: DriverModel) {
    this.modalHeader = driver ? 'Editar conductor' : 'Nuevo conductor';
    this.modalNew = true;
    if (driver) {
      this.driverForm!.setValue({
        id: driver.id,
        driverName: driver.driverName,
        driverDocumentNumber: driver.driverDocumentNumber,
        driverAddress: driver.driverAddress,
        driverPhoto: driver.driverPhoto,
        driverBloodType: driver.driverBloodType,
        driverNationality: driver.driverNationality,
        driverBirth: driver.driverBirth,
        driverAge: driver.driverAge,
        carBrand: driver.carBrand,
        carModel: driver.carModel,
        carLicensePlate: driver.carLicensePlate,
        carYear: driver.carYear
      })
    }
  }

  saveDriver() {
    console.log("this.driverForm", this.driverForm);
    this.submitted = true;
    if (typeof this.driverForm!.value.driverBirth === 'string') {
      this.driverForm!.get('driverBirth')!.errors!['dateFormat'] = true;
      return
    }
    if (this.driverForm!.invalid) {
      return;
    }
    let bDate = this.driverForm!.value.driverBirth;
    let toDb = this.driverForm!.value;
    toDb.driverBirth = new Date(bDate.year, bDate.month, bDate.day).getTime();
    this.driverForm!.value.driverAge = this.getAge(toDb.driverBirth);
    if (this.driverForm!.value.id) {
      // busco en lista
      let index = this.driverList.findIndex(elem => elem.id == this.driverForm!.value.id);
      // cambio por nuevo
      this.driverList[index] = this.driverForm!.value;
    } else {
      this.driverForm!.value.id = this.driverList.length + 1;
      // this.driverList.push(this.driverForm!.value);
      // No se pede usar push debido a que no se actualiza la tabla
      this.driverList = [...this.driverList, ...[this.driverForm!.value]]
    }
    this.modalNew = false;
  }

  closeDialog() {
    this.modalNew = false;
    // reset form value
    this.resetForm();
  }

  resetForm() {
    this.submitted = false;
    this.driverForm = new FormGroup({
      id: new FormControl(''),
      driverName: new FormControl('', Validators.required),
      driverDocumentNumber: new FormControl('', Validators.required),
      driverAddress: new FormControl('', Validators.required),
      driverPhoto: new FormControl(''),
      driverBloodType: new FormControl('', Validators.required),
      driverNationality: new FormControl('', Validators.required),
      driverAge: new FormControl(''),
      driverBirth: new FormControl('', Validators.required),
      carBrand: new FormControl('', Validators.required),
      carModel: new FormControl('', Validators.required),
      carLicensePlate: new FormControl('', Validators.required),
      carYear: new FormControl('', Validators.required),
    });
  }

  validateFormField(field: string, err: string) {
    if (this.submitted) {
      return this.driverForm!.get(field)?.errors![err]
    }
  }

  get formControls() { return this.driverForm!.controls; }

  getAge(dateString:any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
