import {Hero} from "./hero";

export class Warrior extends Hero {

  constructor(name: string) {
    super(name, 360, 42, 47, 4);
  }

  levelUp(): void {
    // super est le mot clé pour appeler le comportement de la mère
    super.levelUp();
    this._hitPoint += 39;
    this._damageMin += 2;
    this._damageMax += 2;
    if (this._level%3 === 0) {
      this._defense += 1;
    }
  }

}
