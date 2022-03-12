import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, public toastService: ToastService) { }

  ngOnInit(): void {
  }

  /**
   * Login method
   */
  clickLogin() {
    if(!this.loginForm.valid){
      this.toastService.showInfo('Por favor llenar todos los campos requeridos');
      return;
    }
    // TODO validate user
    if (this.loginForm.value.userName == 'admin') {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['cooperative']);
    }

  }

  /**
   * Recover password
   */
  recoverPassword() {

  }

  validateFormField(field:string) {
    return this.loginForm.get(field)?.errors && 
      (this.loginForm.get(field)?.dirty || this.loginForm.get(field)?.touched)
  }

}
