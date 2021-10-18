import { Component, OnInit } from '@angular/core';
import {Region} from "../../models/regions/region";

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  arrayRegion: Array<Region> = [];

  ngOnInit(): void {
    this.arrayRegion = [
      new Region("84", "Auvergne-Rhône-Alpes"),
      new Region("11", "Île de France"),
      new Region("32", "Hauts-de-France"),
      new Region("44", "Grand Est"),
      new Region("53", "Bretagne"),
    ];
  }

}
