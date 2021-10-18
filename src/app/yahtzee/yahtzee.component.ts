import { Component } from '@angular/core';
import {Yahtzee} from "../../models/yatzee/yahtzee";

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent {

  /***********************************************/
  /**************** Exo - Yahtzee ***************/
  /***********************************************/

  yatzee: Yahtzee = new Yahtzee();

}
