//creo un enrutador d express. Un "objeto" con rutas.
const {Router} = require('express');
//lo ejecuto
const router = Router();


const employeesCtrl = require('../controllers/employees.controller.js')
//get:devuleve, post: crea, put: actualiza, delete: elimina
//precede prefijo: "/api/employees"
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);
// router.post('/contacto', employeesCtrl.createContacto);

//exporto el enrutador
module.exports = router;