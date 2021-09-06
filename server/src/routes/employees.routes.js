//creo un enrutador d express. Un "objeto" con rutas.
const express = require('express');
//lo ejecuto
const router = express.Router();


const employeesCtrl = require('../controllers/employees.controller.js')
//get:return, post: create, put: update, delete: thatXD
//precede prefix: "/api/employees"
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);
// router.post('/contacto', employeesCtrl.createContacto);

//exporto el enrutador
module.exports = router;