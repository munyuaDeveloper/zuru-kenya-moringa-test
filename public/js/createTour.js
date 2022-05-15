/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const createTour = async (name, destination, startDate, guides, duration, price, summary,description, imageCover, maxGroupSize, difficulty) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/tours',
      data: {
        name,
        destination,
        startDate,
        guides,
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
      showAlert('success', 'Tour created successfully!');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
