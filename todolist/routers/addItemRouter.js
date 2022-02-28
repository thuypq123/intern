const express = require('express');
const router = express.Router();
const addItemController = require('../controller/addItemController')
router.post('/', addItemController.postItem)
module.exports = router;