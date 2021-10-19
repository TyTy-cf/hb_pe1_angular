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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
