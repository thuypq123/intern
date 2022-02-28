const express = require('express')
const router = express.Router();
const updateController = require('../controller/updateController')
router.post('/:ID',updateController.onUpdate);
module.exports = router;