//LOGICAL CONTROLLER FUNCTIONS 

const employeeCtrl = {}
const Employee = require('../models/Employee')

//req: api-rest client request //employeeCtrl's method name: getEmployees
employeeCtrl.getEmployees = async (req, res, next)=> {
    //employees: an array of all the objetcs with the employees data in DB
    //we apply the asyncronous "find" method with de Employee model.
    const employees =  await Employee.find()
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
      });
      await employee.save();
      res.json({ status: "Employee Created" });
};
//returns only one employee.
employeeCtrl.getEmployee = async (req, res, next)=> {
    //console.log(req.params), "params" because we use the ":" in the route
    const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
}

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Employee Updated" });
}

employeeCtrl.deleteEmployee = async (req, res, next)=> {
    await Employee.findByIdAndRemove(req.params.id)
    res.json({status:"Employee Deleted"})
}


module.exports = employeeCtrl;