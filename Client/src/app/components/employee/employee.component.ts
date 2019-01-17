import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  editable: boolean = false;
  employee: any = {};
  employees: any = [];
  projectsArray: any = [];

  constructor(private employeeService: EmployeesService, private projectService: ProjectsService,
    private router: Router) { }

  ngOnInit() {
    this.verify();
    this.getEmployees();
    this.getProjects();
  }

  verify() {
    if (localStorage.getItem('user_name') == undefined) {
      this.router.navigateByUrl('/login')
    }
  }
  getProjects() {

    this.projectService.getProjects().then((projectsArray) => {
      this.projectsArray = projectsArray
    })
  }
  onChangeProject(event) {
    this.employee.project = event.srcElement.value;

  }
  editClick(emp) {
    this.editable = true;
    this.employee = emp;
  }

  getEmployees() {
    this.employeeService.getEmployees().then((res) => {
      this.employees = res;
    })
  }

  deleteEmployee(emp) {
    this.employeeService.deleteEmployee(emp.id_employee).then(() => {
      this.getEmployees();
    })
  }

  addEmployee() {
    if (this.editable == true) {
      console.log(this.employee.project);
      this.employeeService.updateEmployee(this.employee).then(() => {
        this.getEmployees();
        this.editable = false;
      })
    } else {
      this.employeeService.addEmployee(this.employee).then(() => {
        this.getEmployees();
      })
    }

  }

}
