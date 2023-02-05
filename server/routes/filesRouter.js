// routes/filesRouter.js

const Router = require('express');
const router = new Router();
const filesController = require('../controllers/filesController');
const upload = require('../middleware/uploadFiles');

router.get('/', filesController.getAllFiles);
router.get('/:filename', filesController.getOneFile);
router.post("/upload", upload.single('file'), filesController.uploadFile);

module.exports = router;