
export class City {

  private _code: string;
  private _name: string;
  private _codeDepartment: string;
  private _population: number;
  private _postalCode: string[];

  constructor(code: string, name: string, codeDepartment: string, population: number, postalCode: string[]) {
    this._code = code;
    this._name = name;
    this._codeDepartment = codeDepartment;
    this._population = population;
    this._postalCode = postalCode;
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

  get codeDepartment(): string {
    return this._codeDepartment;
  }

  set codeDepartment(value: string) {
    this._codeDepartment = value;
  }

  get population(): number {
    return this._population;
  }

  set population(value: number) {
    this._population = value;
  }

  get postalCode(): string[] {
    return this._postalCode;
  }

  set postalCode(value: string[]) {
    this._postalCode = value;
  }
}
