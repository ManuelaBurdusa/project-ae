import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url: any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8000';
  }


  getProjects() {
    return this.http.get(this.url + '/project/projects').toPromise()
      .then(projectsArray => {
        return projectsArray;
      })
      .catch((error) => {
        return error;
      })
  }

  getProjectById(id_project) {
    return this.http.get(this.url + '/project/getProjectById/' + id_project).toPromise()
      .then(project => {
        return project;
      })
      .catch((error) => {
        return error;
      })
  }

  addProject(project: any) {
    return this.http.post(this.url + "/project/newProject", project, { headers: this.headers })
      .toPromise()
      .then((projectInserted: any) => {
        return projectInserted;
      }).catch((err) => {
        return err;
      })
  }

  updateProject(project: any) {
    return this.http.put(this.url + "/project/updateProject", project, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }

  deleteProject(id_project) {
    return this.http.delete(this.url + "/project/removeProject/" + id_project, { headers: this.headers })
      .toPromise()
      .then((resp: any) => {
        return resp;
      }).catch((err) => {
        return err;
      })
  }
}
