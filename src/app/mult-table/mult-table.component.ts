import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mult-table',
  templateUrl: './mult-table.component.html',
  styleUrls: ['./mult-table.component.scss']
})
export class MultTableComponent implements OnInit {

  attrDigit!: number;

  /**
   * Injection de dépendance : c'est Angular qui nous créer l'objet !
   * @param attrActivatedRoute, avec le mot-clé de visiblité "private" dans le constructeur
   * Cela signifie que nous allons créer un attribut à notre classe de même nom (attrActivatedRoute)
   * et nous allons le set directement
   */
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
