
export class Department {

  private _code: string;
  private _name: string;
  private _codeRegion: string;

  constructor(code: string, name: string, codeRegion: string) {
    this._code = code;
    this._name = name;
    this._codeRegion = codeRegion;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get codeRegion(): string {
    return this._codeRegion;
  }

  set codeRegion(value: string) {
    this._codeRegion = value;
  }
}
