/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateTour = async (tourId, name, destination, startDate, guides, duration, price, summary,description, imageCover, maxGroupSize, difficulty) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/tours/${tourId}`,
      data: {
        name,
        duration,
        price,
        summary,
        description,
        imageCover,
        maxGroupSize,
        difficulty
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Tour updated successfully!');
      window.setTimeout(() => {
        location.assign('/list-tours');
      }, 100);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
