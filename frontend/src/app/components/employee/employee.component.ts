import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
//to use forms. So we can use all it's the data.
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  //INSTANTIATE THE SERVICE
  constructor(public employeeService: EmployeeService) {}

  //it will be called when the component is loaded
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        this.employeeService.employees = res as [];
      },
      (err) => console.error(err)
    );
  }

  addEmployee(form: NgForm) {
    if (confirm('Are you sure you want to create employee?')) {
      this.employeeService.createEmployee(form.value).subscribe(
        (res) => this.getEmployees(),
        (err) => console.error(err)
      );
    }
  }

  deleteEmployee(_id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(_id).subscribe(
        (res) => this.getEmployees(),
        (err) => console.error(err)
      );
    }
  }
}
