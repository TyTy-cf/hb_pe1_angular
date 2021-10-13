import {Dice} from "./dice";

export class Yahtzee {

  private _myDice: Array<Dice> = [];

  throwDice(): void {
    this._myDice = [];
    for (let i = 1; i <= 5; i++) {
      this._myDice.push(new Dice());
    }
  }

  get myDice(): Array<Dice> {
    return this._myDice;
  }

}
