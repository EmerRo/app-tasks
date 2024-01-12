export const VisibilityControl = ({isChecked,setShowCompeted, cleanTasks}) =>{

   const  handleDelete =()=>{
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      cleanTasks();
    }  
   }
    return (
        <div className="flex gap-3 ">
        <div className="border-yellow-500 border-2 w-60 mt-2">
            <input
            
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setShowCompeted(e.target.checked)}
            />{" "}
            <label className="text-yellow-600 font-extrabold"> Mostrar tareas realizadas </label>
        </div>
        <div className="justify-center items-center text-center mt-2">
          
          <button
          className="bg-yellow-800 px-3 py-1 rounded-md "
          onClick={handleDelete}
          >Borrar Tarea</button>
        </div>
      </div>
    )
}