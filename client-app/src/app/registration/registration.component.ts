import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService) { }

  register(){
    alert(JSON.stringify(this.customer));
    this.customerService.register(this.customer).subscribe(response => {
      alert(JSON.stringify(response.message));
    })
  }
}

export class Customer{
  name : string;
  dateOfBirth : Date;
  email : string;
  password : string;
}