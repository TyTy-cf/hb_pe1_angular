import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursComponent} from "./cours/cours.component";
import {MultTableComponent} from "./mult-table/mult-table.component";
import {CompteurComponent} from "./compteur/compteur.component";
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {RegionIndexComponent} from "./region-index/region-index.component";
import {DepartmentIndexComponent} from "./department-index/department-index.component";

const routes: Routes = [
  // Si le path est vide, c'est le component qui sera affiché par défaut
  { path: '', component: CoursComponent },
  { path: 'angular/cours', component: CoursComponent },
  { path: 'table-multiplication/:digit', component: MultTableComponent },
  { path: 'angular/compteur', component: CompteurComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'regions', component: RegionIndexComponent },
  { path: 'regions/:code/departments', component: DepartmentIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
