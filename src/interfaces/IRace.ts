export interface IName {
  readonly name: string;
}

export interface IDexterity {
  readonly dexterity: number;
}

export interface IRace extends IName, IDexterity { }