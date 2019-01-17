import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser/';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  url: any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8000';
  }


  getEmployees() {
    return this.http.get(this.url + '/employees/employees').toPromise()
      .then(employeesArray => {
        return employeesArray;
      })
      .catch((error) => {
        return error;
      })
  }

  addEmployee(employee: any) {
    return this.http.post(this.url + "/employees/addEmployee", employee, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

  updateEmployee(employee: any) {
    return this.http.put(this.url + "/employees/updateEmployee", employee, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

  deleteEmployee(id_employee) {
    return this.http.delete(this.url + "/employees/removeEmployee/" + id_employee, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }
}
