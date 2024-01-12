import { useState } from "react";

function TaskCreator({createNewTask}) {
  const [NewTaskName, setNewTaskName] = useState('');

  // const
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(NewTaskName)
    setNewTaskName("");
  };
  return (
    <form  onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl py-2 text-center">Aplicacion de Tareas</h1>
      <div >
        
        <input
          class=" block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
          type="text"
          placeholder="enter a new task"
          value={NewTaskName}
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
        />
      </div>

      <button
        className="mt-2 rounded-md flex mx-100 bg-yellow-500 px-4 py-2 hover:bg-orange-400 "
        onClick={() => {
          alert(NewTaskName);
        }}
      >
        {" "}
        Guardar Tarea
      </button>
    </form>
  );
}

export default TaskCreator;
