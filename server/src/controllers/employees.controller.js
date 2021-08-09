const employeeCtrl = {}
const Employee = require('../models/Employee')

    employeeCtrl.getEmployees = (req, res)=> {
        res.send("get employees");
    }
    employeeCtrl.getEmployee = (req, res)=> {
        
    }
    employeeCtrl.createEmployee = (req, res)=> {
        res.send("create employees");
    }
    employeeCtrl.editEmployee = (req, res)=> {}
    employeeCtrl.deleteEmployee = (req, res)=> {}
    employeeCtrl.createContacto = (req, res)=> {
        res.send("create contacto");
    }

module.exports = employeeCtrl;