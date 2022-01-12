var express = require('express');
var router = express.Router();

const controller = require('../controllers/cabinet.controller');

router.get('/', controller.getCabinet)
router.patch('/:id', controller.updateCabinet)

module.exports = router;