

const express = require('express');
const router = express.Router();
const learningPathController = require('../controllers/learningPathController')
const ROLES_LIST = require('../config/rolesList');
const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .get(learningPathController.getAllLearningPaths)
    .post(verifyRoles(ROLES_LIST.Admin), learningPathController.createLearningPath)
    .put(verifyRoles(ROLES_LIST.Admin), learningPathController.updateLearningPath)
    

    router.route('/:id')
    .delete(verifyRoles(ROLES_LIST.Admin), learningPathController.deleteLearningPath)
    .get(learningPathController.getLearningPath)

    module.exports = router
