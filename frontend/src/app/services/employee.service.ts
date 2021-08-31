//CONNECTION TO EMPLOYEE API ROUTES.

import { Injectable } from '@angular/core';
//to interactuate with http requests (get, post, put, delete)
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL_API = 'http://localhost:3000/api/employees';
  employees?: Employee[];

  //instantiate the httpClient
  constructor(private http: HttpClient) { }
  
  
  getEmployees() {
   return this.http.get(this.URL_API);
   
  }
}
