const express = require('express');
const router = express.Router();
const itemModel = require('../model/todoList')
const getListController = require('../controller/getListController')
router.get('/',getListController.getList);
module.exports = router;