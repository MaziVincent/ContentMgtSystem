
const express = require('express');

const moduleController = require('../controllers/moduleController');
const ROLES_LIST = require('../config/rolesList')
const verifyRoles = require('../middleware/verifyRoles')
const router = express.Router();


router.route('/')
        .get(moduleController.getAllModules)
        .post(verifyRoles(ROLES_LIST.Admin), moduleController.createModule)
        .put(verifyRoles(ROLES_LIST.Admin), moduleController.updateModule)
        
    router.route('/:id')
    .delete(verifyRoles(ROLES_LIST.Admin), moduleController.deleteModule)
    .get(moduleController.getModule)


module.exports = router


