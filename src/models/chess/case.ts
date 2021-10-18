import {Piece} from "./piece";

export class Case {
  // noir/blanc
  private _color: string;
  private _x: number;
  private _y: number;
  private _piece: Piece|undefined;

  constructor(color: string, x: number, y: number, piece: Piece | undefined) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._piece = piece;
  }

  get color(): string {
    return this._color;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get piece(): Piece | undefined {
    return this._piece;
  }

  set piece(piece: Piece | undefined) {
    this._piece = piece;
  }
}
