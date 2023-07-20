import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addUser } from "../action/action";

const Task =() =>{
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    function addNewTask(){
        const task = inputRef.current.value.trim();
         console.log(task);
        if (task !== ""){
            dispatch(addUser(task));
            inputRef.current.value ="";

        }


    }
    return (
       <div className="task-component">
         <div className="add-task">
            <input
             type="text"
             placeholder="add task here..."
             ref={inputRef}
             className="taskInput"
            />

            <button onClick={()=>addNewTask()}> Add task</button>
            </div> 
        </div>

    );







}
export default Task ; 