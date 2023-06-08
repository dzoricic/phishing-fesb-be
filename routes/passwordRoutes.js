const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

router.get('/', passwordController.getAll);

router.put('/email', passwordController.getByEmail);

router.get('/:id', passwordController.getById);

router.post('/', passwordController.create);

router.delete('/', passwordController.deleteByEmail);

router.delete('/:id', passwordController.deleteById);

module.exports = router;