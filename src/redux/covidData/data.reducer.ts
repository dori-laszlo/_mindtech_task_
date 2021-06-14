import { IDataReducer } from './interfaces';
import {
  DataActionTypes,
  COVID_HUNGARY_DATA_REQUEST,
  COVID_HUNGARY_DATA_SUCCESS,
  COVID_HUNGARY_DATA_FAILURE,
} from './types';

const defaultDataState: IDataReducer = {
  infected: null,
  activeInfected: null,
  deceased: null,
  recovered: null,
  quarantined: null,
  tested: null,
  sourceUrl: '',
  lastUpdatedAtSource: '',
  lastUpdatedAtApify: '',
  readMe: '',
  errorMessage: '',
  isDataLoading: false,
};

export default (state = defaultDataState, action: DataActionTypes): IDataReducer => {
  switch (action.type) {
    case COVID_HUNGARY_DATA_REQUEST:
      return {
        ...state,
        isDataLoading: true,
      };
    case COVID_HUNGARY_DATA_SUCCESS:
      return {
        ...state,
        isDataLoading: false,
        errorMessage: '',
      };
    case COVID_HUNGARY_DATA_FAILURE:
      return {
        isDataLoading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
