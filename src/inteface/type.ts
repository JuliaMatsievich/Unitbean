export interface IItem {
  id: string;
  name: string;
  description: string;
  measurement_units: string;
  code: string;
}

export interface IItems {
  total: number;
  result: IItem[];
}

export interface IItemForm {
  name: string;
  description: string;
  measurement_units: string;
  code: string;
}