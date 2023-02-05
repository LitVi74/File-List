// routes/filesRouter.js

const Router = require('express');
const router = new Router();
const filesController = require('../controllers/filesController');

router.get('/', filesController.getAllFiles);

module.exports = router;