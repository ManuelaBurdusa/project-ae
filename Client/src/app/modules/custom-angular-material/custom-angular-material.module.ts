import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatToolbarModule, MatInputModule, MatCheckboxModule, MatIconModule,
  MatRadioModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatProgressBarModule, MatPaginatorModule, MatChipsModule, MatSortModule, MatExpansionModule
} from '@angular/material';

const modulesArray = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatChipsModule,
  MatSortModule,
  MatExpansionModule
];

@NgModule({
  imports: [...modulesArray],
  exports: [...modulesArray],
})
export class CustomAngularMaterialModule { }
