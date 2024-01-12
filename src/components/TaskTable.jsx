import { TaskRow } from "./TaskRow";
export const TaskTable = ({ tasks, ToggleTask, showCompeted = false }) => {

    const taskTableRows= (doneValue)=>{
        return(
            tasks
            .filter(task=> task.done === doneValue)
            .map((task) => (
                <TaskRow task={task} key={task.name} ToggleTask= {ToggleTask}/>
              ))
        )
    }
  return (
    <table className="table-fixed w-60 text-white border-2 border-cyan-500 rounded-md mt-6 p-2  text-center">
      <thead>
        <tr className="bg-cyan-500 ">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody >
        {
        taskTableRows(showCompeted)
        }
        </tbody>
    </table>
  );
};
