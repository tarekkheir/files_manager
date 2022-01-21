import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = require('express').Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

router.post('/users', UsersController.postNew);

// router.get('/connect', AuthController.getConnect);
// router.get('/disconnect', AuthController.getDisconnect);
// router.get('/users/me', UsersController.getMe);

module.exports = router;
