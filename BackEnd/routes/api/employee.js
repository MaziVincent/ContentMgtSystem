
const express = require('express')


const router = express.Router();
const path = require('path');
const employeeController = require('../../controllers/employeesController')
const ROLES_LIST = require('../../config/rolesList');
const verifyRoles = require('../../middleware/verifyRoles');


router.route('/')
    .get(employeeController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Student),employeeController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Student),employeeController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin),employeeController.deleteEmployee)
    router.route('/:id')
    .get(employeeController.getEmployee);


module.exports = router