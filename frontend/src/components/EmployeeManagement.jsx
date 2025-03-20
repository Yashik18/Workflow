export const EmployeeManagement =() => {
    return (
        <div className="emp-wrapper bg-white shadow-md rounded p-5 w-1/3">
            <h2 className="text-3xt text-center font-bold mb-5">Add Emp</h2>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee ID</label>
                <input type="text" placeholder="Enter Emp ID" className="border w-full p-2" />
            </div>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee Name</label>
                <input type="text" placeholder="Enter Emp Name" className="border w-full p-2" />
            </div>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Employee Skills</label>
                <input type="text" placeholder="Enter Skills" className="border w-full p-2" />
            </div>
            <div className="btn-grp text-center font-bold">
                <button className="w-1/2 bg-blue-700 text-white py-3">Add New Emp</button>
            </div>
        </div>
    )
}