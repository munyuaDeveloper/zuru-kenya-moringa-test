/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { showAlert } from './alerts';
import { createTour } from './createTour';
import { deleteTour } from './deleteTour';
import { updateTour } from './updateTour';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const deleteBtn = document.getElementById('delete-tour');
const updateBtn = document.getElementById('update-tour');
const createTourForm = document.querySelector('.form-create-tour');

if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (createTourForm)
  createTourForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const summary = document.getElementById('summary').value;
    const description = document.getElementById('description').value;
    const maxGroupSize = document.getElementById('maxGroupSize').value;
    const difficulty = document.getElementById('difficulty').value;
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const guides = document.getElementById('guides').value;
    const imageCover = document.getElementById('file').value;
    createTour(name,destination, startDate,
    guides, duration, price, summary, description, imageCover, maxGroupSize, difficulty);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

if (deleteBtn)
  deleteBtn.addEventListener('click', e => {
    e.target.textContent = 'Deleting tour...';
    const { tourId } = e.target.dataset;
    deleteTour(tourId);
  });

if (updateBtn)
  updateBtn.addEventListener('click', e => {
    e.preventDefault();
    e.target.textContent = 'Updating tour...';
    const { tourId } = e.target.dataset;

    const name = document.getElementById('name').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const summary = document.getElementById('summary').value;
    const description = document.getElementById('description').value;
    const maxGroupSize = document.getElementById('maxGroupSize').value;
    const difficulty = document.getElementById('difficulty').value;
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const guides = document.getElementById('guides').value;
    const imageCover = document.getElementById('file').value;

    updateTour(tourId, name,destination, startDate, guides, duration, price, summary, description, imageCover, maxGroupSize, difficulty);
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
