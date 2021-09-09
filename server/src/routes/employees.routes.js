//I build an express router. An "object" with routes.
const express = require('express');
//I define the router.
const router = express.Router();


const employeesCtrl = require('../controllers/employees.controller.js')
//get:return, post: create, put: update, delete: thatXD
//precede prefix: "/api/employees"
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);


module.exports = router;