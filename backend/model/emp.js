const mongoose = require("moongose");
const EmpSchema = new mongoose.Schema(
    {
        empId: String,
        empName: String,
        empSkills: String
    }
)

module.exports=mongoose.model("Emp",EmpSchema);