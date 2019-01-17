import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from './modules/custom-angular-material/custom-angular-material.module';

import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MenuComponent } from './components/menu/menu.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { EmployeeComponent } from './components/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ProjectsComponent,
    MenuComponent,
    AddEditProjectComponent,
    EmployeeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomAngularMaterialModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  exports: [HttpClientModule, CustomAngularMaterialModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
