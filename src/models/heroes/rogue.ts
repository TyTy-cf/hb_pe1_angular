import {Hero} from "./hero";

export class Rogue extends Hero{

  constructor(name: string) {
    super(name, 320, 42, 52, 3);
  }

  levelUp(): void {
    // super est le mot clé pour appeler le comportement de la mère
    super.levelUp();
    this._hitPoint += 33;
    this._damageMin += 3;
    this._damageMax += 3;
    if (this._level%4 === 0) {
      this._defense += 1;
    }
  }

}
