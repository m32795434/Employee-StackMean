//CONNECTION TO EMPLOYEE API ROUTES.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:3000/api/employees';
  constructor() { }
  getEmployees() {
    return []
  }
}
