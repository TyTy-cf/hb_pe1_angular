import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mult-table',
  templateUrl: './mult-table.component.html',
  styleUrls: ['./mult-table.component.scss']
})
export class MultTableComponent implements OnInit {

  attrDigit!: number;

  constructor(private attrActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        this.attrActivatedRoute.params.subscribe(param => {
          this.attrDigit = param.digit;
        });
    }

  mutliTable(): Array<string> {
    let tabMult: Array<string> = [];
    for(let i = 1; i <= 12; i++) {
      tabMult.push(this.attrDigit + ' x ' + i + ' = ' + (i * this.attrDigit));
    }
    return tabMult;
  }

}
