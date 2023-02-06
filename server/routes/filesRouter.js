// routes/filesRouter.js

const Router = require('express');
const router = new Router();
const filesController = require('../controllers/filesController');
const upload = require('../middleware/uploadFiles');

router.get('/get', filesController.getAllFiles);
router.get('/download', filesController.downloadFile);
router.post("/upload", upload.single('file'), filesController.uploadFile);

module.exports = router;