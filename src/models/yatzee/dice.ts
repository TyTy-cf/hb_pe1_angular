
export class Dice {

  private readonly _value: number;

  constructor() {
    this._value = Math.floor(Math.random() * 6) + 1;
  }

  get value(): number {
    return this._value;
  }

}
