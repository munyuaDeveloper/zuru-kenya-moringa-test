const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);

router.get(
  '/manage-tour/:slug',
  authController.isLoggedIn,
  viewsController.manageTour
);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

router.get('/me', authController.protect, viewsController.getAccount);

router.get('/create-tour', authController.protect, viewsController.createTour);

router.get(
  '/update-tour/:slug',
  authController.protect,
  viewsController.updateTour
);
router.get('/list-tours', authController.protect, viewsController.getTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
