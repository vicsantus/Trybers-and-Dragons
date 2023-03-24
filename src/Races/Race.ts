export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;

  constructor(nm: string, dex: number) {
    this.name = nm;
    this.dexterity = dex;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  protected abstract get maxLifePoints(): number;

  // public get dexterity(): number {
  //   return this._dexterity;
  // }

  // public set dexterity(value: number) {
  //   this._dexterity = value;
  // }

  // public get name(): string {
  //   return this._name;
  // }

  // public set name(value: string) {
  //   this._name = value;
  // }
}