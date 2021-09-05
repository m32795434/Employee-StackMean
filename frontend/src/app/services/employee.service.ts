//CONNECTION TO EMPLOYEE API ROUTES.

import { Injectable } from '@angular/core';
//to interactuate with http requests (get, post, put, delete)
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = 'http://localhost:3000/api/employees';
  // we must define Employee propierties.
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0,
    _id: '',
  };
  //EmployeeComponent.getEmployees() will store data here. Then, we use it in employee.component.html, on a *ngfor
  employees!: Employee[];

  //instantiate the httpClient
  constructor(private http: HttpClient) {}

  getEmployees() {
    //or we can use "res as []" in the subscribe of employee.component. We are using both, but's not necesary.
    //return all the employees inside the array. "Get" method on /api/employees.
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(_id: string) {
    // delete http://localhost:3000/api/employees/_id
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
