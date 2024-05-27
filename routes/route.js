const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getAll);
router.get('/id/:id', controller.getRestauById);
router.get('/code/:code', controller.getRestauByCode);
router.post('/', controller.createRestau);
router.put('/:code', controller.updateRestau);
router.delete('/:code', controller.deleteRestau);

module.exports = router;