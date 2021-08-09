const {Router} = require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controller.js')

//precede "/api/employees"
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/', employeesCtrl.getEmployee);
router.put('/', employeesCtrl.editEmployee);
router.delete('/', employeesCtrl.deleteEmployee);


module.exports = router;