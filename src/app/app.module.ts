import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { CompteurComponent } from './compteur/compteur.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionIndexComponent } from './region-index/region-index.component';
import { DepartmentIndexComponent } from './department-index/department-index.component';
import { StudentComponent } from './student/student.component';
import { CityIndexComponent } from './city-index/city-index.component';
import { FormUserComponent } from './form-user/form-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AllMultiplicationTablesComponent } from './all-multiplication-tables/all-multiplication-tables.component';
import { FormUserCodeComponent } from './form-user-code/form-user-code.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { YahtzeeScoreComponent } from './yahtzee-score/yahtzee-score.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    MultTableComponent,
    CompteurComponent,
    YahtzeeComponent,
    NavbarComponent,
    RegionIndexComponent,
    DepartmentIndexComponent,
    StudentComponent,
    CityIndexComponent,
    FormUserComponent,
    AllMultiplicationTablesComponent,
    FormUserCodeComponent,
    UserIndexComponent,
    YahtzeeScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
