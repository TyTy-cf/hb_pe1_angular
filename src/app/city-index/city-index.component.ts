import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DepartmentService} from "../../service/department.service";
import {RegionService} from "../../service/region.service";
import {CityService} from "../../service/city.service";
import {City} from "../../models/regions/city";
import {Region} from "../../models/regions/region";
import {Department} from "../../models/regions/department";

@Component({
  selector: 'app-city-index',
  templateUrl: './city-index.component.html',
  styleUrls: ['./city-index.component.scss']
})
export class CityIndexComponent implements OnInit {

  arrayCity: Array<City> = [];
  codeRegion!: string;
  codeDepartment!: string;
  region: Region|undefined;
  department: Department|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private regionService: RegionService,
    private departmentService: DepartmentService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.codeRegion = param.codeReg;
      this.codeDepartment = param.codeDpt;
    });
    this.region = this.regionService.findByCode(this.codeRegion);
    this.department = this.departmentService.findByCode(this.codeDepartment);
    this.arrayCity = this.cityService.findByCodeDepartment(this.codeDepartment);
  }

}
