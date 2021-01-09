import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  message : string;
  
  constructor(private customerService: CustomerService, private router: Router) { }

  loginCheck(){
    console.log(this.login);    //alert(JSON.stringify(this.login));
    this.customerService.login(this.login).subscribe(response => {
      console.log(response);    //alert(JSON.stringify(response));
      if(response.status == 'SUCCESS') {
        let customerId = response.customerId;
        let customerName = response.customerName;
        sessionStorage.setItem('customerId', String(customerId));
        sessionStorage.setItem('customerName',customerName);
        this.router.navigate(['dashboard']);
      }
      else
      this.message = response.message;
      })
    }
  }
  export class Login {
    email : string;
    password : string;
  }
