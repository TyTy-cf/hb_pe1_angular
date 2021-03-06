import { Injectable } from '@angular/core';
import {City} from "../models/regions/city";
import {Department} from "../models/regions/department";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private _arrayCity: Array<City> = [
    new City("63001", "Aigueperse", "63", 2720, ["63260"]),
    new City("63002", "Aix-la-Fayette", "63", 91, ["63980"]),
    new City("42187", "Roanne", "42", 34685, ["42300"]),
    new City("63113", "Clermont-Ferrand", "63", 142686, ["63100", "63000"]),
    new City("42218", "Saint-Etienne", "42", 171924, ["42000", "42100", "42230"])
  ];

  get arrayCity(): Array<City> {
    return this._arrayCity;
  }

  findByCodeDepartment(codeDpt: string): Array<City> {
    return this._arrayCity.filter((city) => city.codeDepartment === codeDpt);
  }
}
