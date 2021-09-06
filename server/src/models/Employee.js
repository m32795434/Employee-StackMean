//A model is a class with which we construct documents. 
//each document will be a entity with 
//properties and behaviors as declared in our schema. 
const {Schema, model} = require('mongoose');

const employeeSchema = new Schema(
    {
      name: {type: String, required: true},
      position: {type: String, required: true},
      office: {type: String, required: true},
      salary: {type: Number, required: true},
    },
    {
        //when was the document created or modified.
        timestamps: true,
        //contains the internal revision of the document.
        versionKey: false,
    }
);
module.exports = model("Employee", employeeSchema);