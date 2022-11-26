const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/', groupController.getGroups);

router.get('/:group_id', groupController.getGroup);

router.post('/', groupController.addGroup);

router.put('/:group_id', groupController.updateGroup);

router.delete('/:group_id', groupController.deleteGroup);

module.exports = router;