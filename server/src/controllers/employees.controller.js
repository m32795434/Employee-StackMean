const employeeCtrl = {}
const Employee = require('../models/Employee')
const Fcontacto = require('../models/Fcontacto')

    employeeCtrl.getEmployees = async (req, res)=> {
      const employees =  await Employee.find()
      res.json(employees)
    }
    employeeCtrl.getEmployee = (req, res)=> {
        
    }
    employeeCtrl.createEmployee = async (req, res)=> {
        const newEmployee = new Employee(req.body)
        await newEmployee.save()
        res.send("Employee created");
    }
    employeeCtrl.editEmployee = (req, res)=> {}
    employeeCtrl.deleteEmployee = (req, res)=> {}
    employeeCtrl.createContacto = (req, res)=> {
        res.send("create contacto");
    }

module.exports = employeeCtrl;