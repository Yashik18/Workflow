import axios from 'axios';
import { useState } from 'react';
export const EmployeeManagement =() => {
  
    const [empId,setEmpId]= useState("");
    const [empName,setEmpName]= useState("");
    const [empSkills,setEmpSkills]= useState("");
    const handleAddEmp = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5500/api/emp/create", { empId, empName, empSkills });
            console.log("Response from server:", res.data);
            setEmpId("");
            setEmpName("");
            setEmpSkills("");
        } catch(error){
            console.log("Error creating new Emp:",error);
        }
    }
    return (
        <div className="emp-wrapper bg-white shadow-md rounded p-5 w-1/3">
            <h2 className="text-3xt text-center font-bold mb-5">Add Emp</h2>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee ID</label>
                <input type="text" placeholder="Enter Emp ID" className="border w-full p-2" value={empId} onChange={(e)=>setEmpId(e.target.value)} />
            </div>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee Name</label>
                <input type="text" placeholder="Enter Emp Name" className="border w-full p-2" value={empName} onChange={(e)=>setEmpName(e.target.value)} />
            </div>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee Skills</label>
                <input type="text" placeholder="Enter Skills" className="border w-full p-2" value={empSkills} onChange={(e)=>setEmpSkills(e.target.value)} />
            </div>
            <div className="btn-grp text-center font-bold">
                <button className="w-1/2 bg-blue-700 text-white py-3" onClick={handleAddEmp}>Add New Emp</button>
            </div>
        </div>
    )
}