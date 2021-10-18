
export abstract class Hero {

  protected _name: string;
  protected _hitPoint: number;
  protected _damageMin: number;
  protected _damageMax: number;
  protected _level: number;
  protected _defense: number;
  protected _criticalChance: number;

  constructor(name: string, hitPoint: number, damageMin: number, damageMax: number, defense: number) {
    this._name = name;
    this._hitPoint = hitPoint;
    this._damageMin = damageMin;
    this._damageMax = damageMax;
    this._defense = defense;
    this._level = 1;
    this._criticalChance = 5;
  }

  get name(): string {
    return this._name;
  }

  get hitPoint(): number {
    return this._hitPoint;
  }

  set hitPoint(value: number) {
    this._hitPoint = value;
  }

  get damageMin(): number {
    return this._damageMin;
  }

  get damageMax(): number {
    return this._damageMax;
  }

  get level(): number {
    return this._level;
  }

  get defense(): number {
    return this._defense;
  }

  get criticalChance(): number {
    return this._criticalChance;
  }

  levelUp(): void {
    this._level += 1;
    this._criticalChance += 0.25;
  }

  /**
   * Ajoute des niveaux au héro
   *
   * @param nbLevel le nombre de hero à ajouter
   */
  addLevel(nbLevel: number): void {
    for (let i = 0; i < nbLevel; i++) {
      this.levelUp();
    }
  }

  /**
   * Fonction d'attaque du héro courant
   *
   * @param target le héro attaqué
   */
  attack(target: Hero): void {
    // Déterminer les dégâts du héro : un alétoire entre ses dégâts min et max
    let damages = this.getRandomBetween(this._damageMin, this._damageMax);
    // Déterminer si le coup est critique,
    if (this._criticalChance >= this.getRandomBetween(0, 100)) {
      // un coup critique inflige 50% en plus des dégâts normaux
      damages *= 1.5;
      console.log('Le hero ' + this.name + ' a réalisé un coup critique !');
    }
    // Puis le coup est réduit par la défense du héro attaqué
    // 1 - (target.defense/100) => une valeur inférieure à 1 (ex : 0.98)
    damages = damages * (1 - (target.defense/100));
    // Puis le héro attaqué perd ses points de vie
    target.hitPoint -= Math.floor(damages);
    if (target.hitPoint < 0) {
      target.hitPoint = 0;
    }
  }

  isAlive(): boolean {
    return this._hitPoint > 0;
  }

  isDead(): boolean {
    return this._hitPoint <= 0;
  }

  /**
   * Génère un nombre alétoire entre deux valeurs (min et max)
   * @param min
   * @param max
   */
  getRandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
