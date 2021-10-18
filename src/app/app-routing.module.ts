import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursComponent} from "./cours/cours.component";
import {MultTableComponent} from "./mult-table/mult-table.component";

const routes: Routes = [
  // Si le path est vide, c'est le component qui sera affiché par défaut
  { path: '', component: CoursComponent },
  { path: 'angular/cours', component: CoursComponent },
  { path: 'table-multiplication/:digit', component: MultTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
