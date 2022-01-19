import AppControllers from '../controllers/AppControllers';
const router = require('express').Router();

router.get('/status', (req, res) => {
    AppControllers.getStatus(req, res);
});

router.get('/stats', (req, res) => {
    AppControllers.getStats(req, res);
});

module.exports = router;
