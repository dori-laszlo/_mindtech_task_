import { AxiosError } from 'axios';
import { ICovidHungaryDataResponse } from './interfaces';

export const COVID_HUNGARY_DATA_REQUEST = 'COVID_HUNGARY_DATA_REQUEST';
export const COVID_HUNGARY_DATA_SUCCESS = 'COVID_HUNGARY_DATA_SUCCESS';
export const COVID_HUNGARY_DATA_FAILURE = 'COVID_HUNGARY_DATA_FAILURE';

export interface ICovidHungaryDataRequestAction {
  type: typeof COVID_HUNGARY_DATA_REQUEST;
}

export interface ICovidHungaryDataSuccessAction {
  type: typeof COVID_HUNGARY_DATA_SUCCESS;
  payload: ICovidHungaryDataResponse;
}

export interface ICovidHungaryDataFailureAction {
  type: typeof COVID_HUNGARY_DATA_FAILURE;
  error: AxiosError;
}

export type DataActionTypes =
  | ICovidHungaryDataRequestAction
  | ICovidHungaryDataSuccessAction
  | ICovidHungaryDataFailureAction;
