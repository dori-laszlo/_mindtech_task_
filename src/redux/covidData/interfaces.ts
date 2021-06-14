export interface IDataReducer {
  infected: number | null;
  activeInfected: number | null;
  deceased: number | null;
  recovered: number | null;
  quarantined: number | null;
  tested: number | null;
  sourceUrl: string;
  lastUpdatedAtSource: string;
  lastUpdatedAtApify: string;
  readMe: string;
  errorMessage: string;
  isDataLoading: boolean;
}

export interface ICovidHungaryDataResponse {
  infected: number;
  activeInfected: number;
  deceased: number;
  recovered: number;
  quarantined: number;
  tested: number;
  sourceUrl: string;
  lastUpdatedAtSource: string;
  lastUpdatedAtApify: string;
  readMe: string;
}
