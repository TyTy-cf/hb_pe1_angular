import { Injectable } from '@angular/core';
import {Region} from "../models/regions/region";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private readonly _arrayRegion: Array<Region> = [
    new Region("84", "Auvergne-Rhône-Alpes"),
    new Region("11", "Île de France"),
    new Region("32", "Hauts-de-France"),
    new Region("44", "Grand Est"),
    new Region("53", "Bretagne"),
  ];

  get arrayRegion(): Array<Region> {
    return this._arrayRegion;
  }

  /**
   * Récupère une region, ou renvoie undefined si la région n'existe pas
   * @param code
   */
  findByCode(code: string): Region|undefined {
    const tmpArray = this._arrayRegion.filter((region) => region.code === code);
    if (tmpArray.length > 0) {
      return tmpArray[0];
    }
    return undefined;
  }
}
