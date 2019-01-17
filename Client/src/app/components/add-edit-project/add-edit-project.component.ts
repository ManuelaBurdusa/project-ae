import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit, OnChanges {

  @Input("id_project") id_project;

  project: any = {};
  editable: boolean = false;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.getProjectById();
  }
  getProjectById() {
    this.projectService.getProjectById(this.id_project).then((project) => {
      if (project != null) {
        this.project = project;
        this.editable = true;
      }
    })
  }
  addProject() {
    if (this.editable) {
      this.projectService.updateProject(this.project).then(() => {
        window.location.reload();
      })
    } else {
      this.projectService.addProject(this.project).then((resp) => {
        window.location.reload();
      })
    }

  }

}
