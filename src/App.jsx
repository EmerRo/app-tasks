import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";


const App = () => {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompeted, setShowCompeted] = useState(false);
  // function new task
  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }
  const ToggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      // si existe datos convierte a json.parse
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompeted(false)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);
  return (
    <main className="bg-cyan-900 h-screen text-white  ">
      <div className=" flex flex-col    w-full  items-center justify-center ">
      <TaskCreator createNewTask={createNewTask} />

      <div  className=" mt-5 ">
        <div className="  ">
          <TaskTable tasks={tasksItems} ToggleTask={ToggleTask} />
          {/* checked */}
          <VisibilityControl
          isChecked={showCompeted}
          setShowCompeted ={(checked) => setShowCompeted(checked)}
          cleanTasks={cleanTasks}
          />
        </div>
     
      <div>
        {showCompeted === true && (
          <TaskTable
            tasks={tasksItems}
            ToggleTask={ToggleTask}
            showCompeted={showCompeted}
          />
        )}
      </div>
       </div>
      </div>
    </main>
  );
};

export default App;
