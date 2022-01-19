import AppControllers from '../controllers/AppControllers';
const router = require('express').Router();

router.get('/status', AppControllers.getStatus);

router.get('/stats', AppControllers.getStats);

module.exports = router;
