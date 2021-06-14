import { Dispatch } from 'redux';
// eslint-disable-next-line import/no-relative-parent-imports
import client from '../../api/client';
import {
  COVID_HUNGARY_DATA_FAILURE,
  COVID_HUNGARY_DATA_REQUEST,
  COVID_HUNGARY_DATA_SUCCESS,
} from './types';

export const getCovidHungaryData = () => async (dispatch: Dispatch) => {
  dispatch({
    type: COVID_HUNGARY_DATA_REQUEST,
  });
  try {
    const res = await client.getCovidHungaryData();
    dispatch({
      type: COVID_HUNGARY_DATA_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: COVID_HUNGARY_DATA_FAILURE,
      error: error,
    });
  }
};
