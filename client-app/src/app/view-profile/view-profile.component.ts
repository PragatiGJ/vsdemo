import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  customerId : number;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerId = parseInt(sessionStorage.getItem('customerId'));
    this.customerService.fetchProfile(this.customerId).subscribe(response => {
      alert(JSON.stringify(response));
    })
  }

}
