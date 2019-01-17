import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: any;

  constructor(public http: HttpClient, public router: Router) {
    this.url = 'http://localhost:8000';
  }

  login(user: any) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/auth/login', user, { headers: headers }).toPromise();

  }


}
