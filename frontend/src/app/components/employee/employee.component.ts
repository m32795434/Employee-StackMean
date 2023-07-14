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
      {
        next:(res) => {
          this.employeeService.employees = res as [];//I think a better approach would be using a Subject or a setter. Not this way.💡 
        },
        error:(err) => console.error(err)
      }
    );
  }
  addEmployee(form: NgForm) {
    // to determinate, if it's an editing or creating method
    if (this.employeeService.selectedEmployee._id) {
      this.employeeService.updateEmployee(form.value).subscribe(//this is deprecated, check in the future!!🎯
        (res) => console.log(res),
        (err) => console.error(err)
      );
    } else {
      if (confirm('Are you sure you want to create employee?')) {
        this.employeeService.createEmployee(form.value).subscribe(//this is deprecated, check in the future!!🎯
          // it creates the employee, but doesn't call getEmployees(),or resetForm. What's the problem?
          (res) => {
            this.getEmployees();
            form.reset();
            console.log(res);
          },
          (err) => console.error(err)
        );
      }
    }
  }

  deleteEmployee(_id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(_id).subscribe(//this is deprecated, check in the future!!🎯
        (res) => {
          this.getEmployees();
          console.log(res);
        },
        (err) => console.error(err)
      );
    }
  }
  // we take the data from the inside of the *ngfor
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
}
