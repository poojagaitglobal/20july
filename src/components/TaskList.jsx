import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../action/action";


const TaskList = () =>{
    const tasks = useSelector((state) => state.tasks);
     console.log(tasks)
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteUser(id));
    };
    return(
       <div  className="tasklist"> 
       <div className="display-task">
        <h3>your Task: </h3>
         <ul className="task">
         {tasks?.map((task) =>
         <li className="task" key={task.id}> 
            {task.text}
            <button className="delete-btn" onClick={ () => handleDelete(task.id)}>delete</button>
         </li>
         )}

         </ul>
       </div>
       </div>

    )


}       
export default TaskList;