import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/regions/department";

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  arrayDepartments: Array<Department> = [];

  constructor() { }

  ngOnInit(): void {
    this.arrayDepartments = [
      new Department("63", "Puy-de-Dôme", "84"),
      new Department("42", "Loire", "84"),
      new Department("15", "Cantal", "84"),
      new Department("01", "Ain", "84"),
      new Department("03", "Allier", "84"),
      new Department("75", "Paris", "11"),
      new Department("77", "Seine-et-Marne", "11"),
      new Department("91", "Essone", "11"),
      new Department("95", "Val-d'Oise", "11"),
      new Department("02", "Aisne", "32"),
      new Department("59", "Nord", "32"),
      new Department("60", "Oise", "32"),
      new Department("62", "Pas-de-Calais", "32"),
      new Department("80", "Somme", "32"),
      new Department("08", "Ardennes", "44"),
      new Department("10", "Aube", "44"),
      new Department("51", "Marne", "44"),
      new Department("52", "Haute-Marne", "44"),
      new Department("54", "Meurthe-et-Moselle", "44"),
      new Department("55", "Meuse", "44"),
    ];
  }

}
