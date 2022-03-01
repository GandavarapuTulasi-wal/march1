import { useState,useContext,useReducer } from 'react'
import TodoObContext from './TodoObContext'
import TodoReducer from './TodoReducer'
function TodoApp() {
    const todoOb=useContext(TodoObContext)
    const [item,setItem]=useState("")
    const [status,setStatus]=useState("complete")
    const [state,dispatch] = useReducer(TodoReducer,todoOb);
    const addTodo=()=>{
        dispatch({type: "add",item:item,status:status});
    }
    let deleteTodo=(indexToDelete)=>{
        dispatch({type: "delete",index:indexToDelete});
    }
    const clearHobbies=()=>{
        dispatch({type: "clear"});
     }

    return (
        <div className="card-container">
            <div>
                <h1>Todos App</h1>
                <div className="box">
                <input type="text" name="item" placeholder="Enter Todo" className="todo-user-input" onInput={(event)=>{setItem(event.target.value)}}/>
                <select name="status" className="todo-user-input" onChange={(event)=>{setStatus(event.target.value)}}>
                    <option value="complete">Complete</option>
                    <option value="incomplete">incomplete</option>
                </select>
                <div className="card">
             <button onClick={addTodo}>Add</button>
             <button onClick={()=>{clearHobbies()}}>Clear All</button>
             </div>
             </div>

            </div>
            
            <div>
            <h1>My Todos</h1>
            {state.map((val, index) => (
              <div className="card">
                  <div className="item">Item: {val.item}</div>
                <div className="item">Status: {val.status}</div>
                <button className="delete" onClick={()=>{deleteTodo(index)}}>Delete</button>
               </div>
            ))}
             </div>

        </div>
    )

}
export default TodoApp