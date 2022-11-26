const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.getUsers);

router.get('/:user_id', usersController.getUser);

router.post('/', usersController.addUser);

router.put('/:user_id', usersController.updateUser);

router.patch('/secret-santa/:user_id', usersController.addSecretSantaToUser);

router.patch('/:user_id/group/:group_id', usersController.addUserToGroup);

router.delete('/:user_id', usersController.deleteUser);

module.exports = router;