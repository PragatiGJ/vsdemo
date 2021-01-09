import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './registration/registration.component';
import { Login } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  register(customer : Customer) : Observable<any>{
    let url = "http://localhost:8081/spring-rest-mvc/api/register";
    return this.http.post(url, customer);
  }

  login(login : Login) : Observable<any>{
    let url = "http://localhost:8081/spring-rest-mvc/api/login";
    return this.http.post(url, login);
  }

  picUpload(formData : FormData) : Observable<any>{
    let url = "http://localhost:8081/spring-rest-mvc/api/pic-upload";
    return this.http.post(url, formData);
  }

  fetchProfile(id : number) : Observable<Customer>{
    let url = "http://localhost:8081/spring-rest-mvc/api/profile?customerId="+id;
    return this.http.get<Customer>(url);
  }
}
