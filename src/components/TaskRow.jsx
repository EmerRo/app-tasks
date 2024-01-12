export const TaskRow = ({task, ToggleTask}) => {    
  return (
   
        <tr >
            
          <td className="flex justify-between items-center p-2  ">

            {task.name}
            <input
           
              type="checkbox"
              checked={task.done}
              onChange={() => {
               ToggleTask(task)
              }}
            />
          </td>
        </tr>
 
  );
};
