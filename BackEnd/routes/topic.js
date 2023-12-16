

const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController')
const ROLES_LIST = require('../config/rolesList');
const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .get(topicController.getAllTopics)
    .post(verifyRoles(ROLES_LIST.Admin), topicController.createTopic)
    .put(verifyRoles(ROLES_LIST.Admin), topicController.updateTopic)
    

    router.route('/:id')
    .delete(verifyRoles(ROLES_LIST.Admin), topicController.deleteTopic)
    .get(topicController.getTopic)

    module.exports = router
