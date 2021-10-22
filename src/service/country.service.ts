import { Injectable } from '@angular/core';
import {Country} from "../models/user/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _arrayCountries: Array<Country> = [];

  constructor() {
    this._arrayCountries.push(new Country('France'));
    this._arrayCountries.push(new Country('Allemagne'));
    this._arrayCountries.push(new Country('Angleterre'));
    this._arrayCountries.push(new Country('Belgique'));
    this._arrayCountries.push(new Country('Suisse'));
    this._arrayCountries.push(new Country('Espagne'));
  }

  get arrayCountries(): Array<Country> {
    return this._arrayCountries;
  }
}
