import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8000';
  }

  getUsers() {
    return this.http.get(this.url + '/auth/getUsersArray').toPromise()
      .then(users => {
        return users;
      })
      .catch((error) => {
        return error;
      })
  }

  addUser(userObj: any) {
    return this.http.post(this.url + "/auth/newUser", userObj, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

  updateUser(userObj: any) {
    return this.http.put(this.url + "/auth/updateUser", userObj, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

  deleteUser(id_user) {
    return this.http.delete(this.url + "/auth/deleteUser/" + id_user, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

}
