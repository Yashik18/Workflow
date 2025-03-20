export const TaskManagement =() => {
    return (
        <div className="task-wrapper bg-white shadow-md rounded p-5 w-7/12">
            <h2 className="text-3xt text-center font-bold mb-5">Assign Task</h2>
            <div className="input-group mb-4">
                <label className="block mb-2 font-bold" >Enter Task Title</label>
                <textarea  placeholder="Task Title" className="border w-full p-2" />
            </div>
            <div className="input-group mb-4">   
                <label className="block mb-2 font-bold" >Enter Task Description</label>
                <textarea  placeholder="Task description" className="border w-full p-2" />
            </div>
            <div className="input-group mb-4">   
                <label className="block mb-2 font-bold" >Select Emp</label>
               <select className="border w-full p-2"><option >Select Emp</option></select>
            </div>
            <div className="btn-grp text-center font-bold">
                <button className="w-1/2 bg-blue-700 text-white py-3">Assign Task</button>
            </div>
        </div>
    )
}