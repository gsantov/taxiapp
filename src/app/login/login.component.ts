import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Login method
   */
  clickLogin(){
    // validate user

  }

  /**
   * Recover password
   */
  recoverPassword(){

  }

}
