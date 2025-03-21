const mongoose = require("moongose");
const TaskSchema = new mongoose.Schema(
    {
        taskTitle: String,
        taskDesc: String,
        empName: String
    }
)

module.exports=mongoose.model("Task",TaskSchema);