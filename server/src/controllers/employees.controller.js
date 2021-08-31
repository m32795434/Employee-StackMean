//FUNCTIONS LOGICAL CONTROLLER 
const employeeCtrl = {}
const Employee = require('../models/Employee')

//req: api-rest client request //employeeCtrl's method name: getEmployees
employeeCtrl.getEmployees = async (req, res)=> {
    //employees: an array of all the objetcs with the employees data in DB
    //we apply the asyncronous "find" method with de Employee model.
    const employees =  await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res)=> {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send("Employee created");
}
//returns only one employee.
employeeCtrl.getEmployee = async (req, res)=> {
    //console.log(req.params), "params" because we use the ":" in the route
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeCtrl.editEmployee = async (req, res)=> {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: "Employee updated"})
}

employeeCtrl.deleteEmployee = async (req, res)=> {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status:"Employee deleted"})
}


module.exports = employeeCtrl;