import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
//to use forms. So we can use all it's the data.
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  //INSTANTIATE THE SERVICE
  constructor(public employeeService: EmployeeService) {}

  //when the component is loaded, it will list all the employees, using a *ngfor
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        //we store the data in "employeeService.employees". I must do it better.
        this.employeeService.employees = res as [];
      },
      (err) => console.error(err)
    );
  }
  addEmployee(form: NgForm) {
    // to determinate, if it's an editing or creating method
    if (this.employeeService.selectedEmployee._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        (res) => console.log(res),
        (err) => console.error(err)
      );
    } else {
      if (confirm('Are you sure you want to create employee?')) {
        this.employeeService.createEmployee(form.value).subscribe(
          // it creates the employee, but doesn't call getEmployees(),or resetForm. What's the problem?
          (res) => {
            this.getEmployees();
            form.reset();
          },
          (err) => console.error(err)
        );
      }
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

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  //to practice another method, and not to use in HTML type="reset", so I can reuse this. But it doesn't work.
  // resetForm(form: NgForm) {
  //   form.reset();
  // }
}
