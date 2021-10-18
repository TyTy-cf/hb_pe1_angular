
export abstract class Piece {

  protected _color: string;
  protected _name: string;
  private _image!: string;

  protected constructor(color: string, name: string) {
    this._color = color;
    this._name = name;
  }

  get color(): string {
    return this._color;
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  abstract move(): void;

}
