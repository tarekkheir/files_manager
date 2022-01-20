import AppController from '../controllers/AppControllers';
const router = require('express').Router();

router.get('/status', AppController.getStatus);

router.get('/stats', AppController.getStats);

module.exports = router;
