import {Component, EventEmitter, Output} from '@angular/core';
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

  @Output()
  yahtzeeEmitter: EventEmitter<Yahtzee> = new EventEmitter<Yahtzee>();

  yahtzee: Yahtzee = new Yahtzee();

  throwDice(): void {
    this.yahtzee.throwDice();
    this.yahtzeeEmitter.emit(this.yahtzee);
  }

}
