import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/regions/department";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "../../service/department.service";
import {RegionService} from "../../service/region.service";
import {Region} from "../../models/regions/region";

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  arrayDepartments: Array<Department> = [];
  codeRegion!: string;
  region: Region|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private departmentService: DepartmentService,
    private regionService: RegionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.codeRegion = param.code;
    });
    this.region = this.regionService.findByCode(this.codeRegion);
    this.arrayDepartments = this.departmentService.findByCodeRegion(this.codeRegion);
  }

  routerLinkCity(code: string): void {
    // adapter le lien pour l'url des villes
    this.router.navigate(['regions/' + code + '/departments']);
  }
}
