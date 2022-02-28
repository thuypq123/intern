const express = require('express')
const router = express.Router()
const checkedController = require('../controller/checkedController')

router.post('/:ID',checkedController.postCheckedItem)

module.exports = router;