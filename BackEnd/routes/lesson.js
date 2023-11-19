

const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController')
const ROLES_LIST = require('../config/rolesList');
const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .get(lessonController.getAllLessons)
    .post(verifyRoles(ROLES_LIST.Admin), lessonController.createLesson)
    .put(verifyRoles(ROLES_LIST.Admin), lessonController.updateLesson)
    .delete(verifyRoles(ROLES_LIST.Admin), lessonController.deleteLesson)

    router.route('/:id')
    .get(lessonController.getLesson)

    module.exports = router
