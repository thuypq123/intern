const express = require('express');
const router = express.Router();
const deleteController = require('../controller/deleteController');
router.get('/:ID',deleteController.deleteItem);

module.exports = router;