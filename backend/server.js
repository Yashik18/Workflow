const express=require("express");
const mongoose= require("mongoose");
const cors= require("cors");

const app=express();

const empRoutes=require("./routes/empRoute");

mongoose.connect('mongodb+srv://yashikadmin:admin@cluster0.vdaw4.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,  // Enable TLS without conflicting options
    serverSelectionTimeoutMS: 5000  // Optional: Prevent long hangs
})
.then(() => console.log("✅ MONGODB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));



app.use(cors());
app.use(express.json());
app.use("/api/emp",empRoutes);
// app.use("/api/task",taskRoutes);

const PORT=process.env.PORT || 5500;
app.listen(PORT,()=> console.log("Server running on PORT",PORT));