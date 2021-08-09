const employeeCtrl = {}

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

module.exports = employeeCtrl;