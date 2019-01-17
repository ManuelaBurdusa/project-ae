import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  p: number = 1;
  projects: any = [];

  key: string = 'name';
  reverse: boolean = false;
  id_project: any;

  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.verify();
    this.getProjects();
  }

  verify() {
    if (localStorage.getItem('user_name') == undefined) {
      this.router.navigateByUrl('/login')
    }
  }
  selectedId(p) {
    this.id_project = p.id_project;
  }

  getProjects() {
    this.projectService.getProjects().then((response) => {
      this.projects = response;
    })
  }

  deleteProject(p) {
    let index = this.projects.indexOf(p);
    this.projects = this.projects.splice(index, 1);
    this.projectService.deleteProject(p.id_project).then((response) => {
      this.getProjects();
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
