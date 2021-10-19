import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegionService} from "../../service/region.service";

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent {

  constructor(
    private router: Router,
    public regionService: RegionService
  ) { }

  /**
   * OBjet router qui permet de rediriger l'utilisateur sur une route
   * @param code
   */
  routerLinkDepartment(code: string): void {
    this.router.navigate(['regions/' + code + '/departments']);
  }
}
