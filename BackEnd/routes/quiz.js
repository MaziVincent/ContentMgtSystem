



const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController')
const ROLES_LIST = require('../config/rolesList');
const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin),quizController.getAllQuiz)
    .post(verifyRoles(ROLES_LIST.Admin), quizController.createQuiz)
    

    module.exports = router
