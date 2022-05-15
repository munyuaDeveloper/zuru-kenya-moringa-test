/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const deleteTour = async tourId => {
  try {
      const res = await axios({
        method: 'DELETE',
        url: `/api/v1/tours/${tourId}`
      });
       showAlert('success', 'Tour deleted successfully!');
       window.setTimeout(() => {
               location.assign('/list-tours');
             }, 100);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
