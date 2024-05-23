const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getRestauById);
router.post('/', controller.createRestau);
router.put('/:id', controller.updateRestau);
router.delete('/:id', controller.deleteRestau);

module.exports = router;