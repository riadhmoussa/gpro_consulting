import {Person} from "./Person";

export interface Production {
  id: number;
  dateProduction: string;
  id_chaine:String;
  id_section:String;
  nameChaine:String;
  nameSection:String;
  persons:Person[]
}
