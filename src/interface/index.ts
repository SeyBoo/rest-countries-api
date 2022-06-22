interface Curriences {
  code:string;
  name:string;
  symbol:string;
}

interface Languages {
  name:string;
  nativeName:string;
}

interface borderCountry {
  acronym:string;
  name:string;
}

export interface Country {
  status: string;
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Curriences[];
  languages: Languages[];
  regionalBlocs: borderCountry[];
}

export type DataType = Country[] | null;
