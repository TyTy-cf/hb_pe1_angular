import { Injectable } from '@angular/core';
import {Department} from "../models/regions/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _arrayDepartments: Array<Department> =  [
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

  get arrayDepartments(): Array<Department> {
    return this._arrayDepartments;
  }

  findByCodeRegion(codeRegion: string): Array<Department> {
    return this._arrayDepartments.filter((dpt) => dpt.codeRegion === codeRegion);
  }
}
