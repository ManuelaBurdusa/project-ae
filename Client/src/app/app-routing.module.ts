import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from 'src/app/components/users/users.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'employees', component: EmployeeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: '**', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }
