// eslint-disable-next-line import/no-relative-parent-imports
import { ICovidHungaryDataResponse } from '../redux/covidData/interfaces';
import { API_URL } from './urls';
import axiosInstance from './axiosInstance';

class Client {
  getCovidHungaryData = async (): Promise<ICovidHungaryDataResponse> => {
    const response = await axiosInstance.get(API_URL);
    return response.data.data;
  };
}

export default new Client();
