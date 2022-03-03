import { useReducer } from "react";
import TodoApp from "./TodoApp";
import TodoObContext from './TodoObContext'
import TodoReducer from './TodoReducer'
const TodoUseProvider = () => {
    const todoOb=[{ item: "Cook Breakfast", status: "Complete" }, { item: "do Coding", status: "incomplete" }]
     const [state,dispatch] = useReducer(TodoReducer,todoOb);
     const reducerValue={state,dispatch}
     return (
         <div>
            <TodoObContext.Provider value={reducerValue}>
               <TodoApp/>
            </TodoObContext.Provider>
         </div>
     );
 }
export default TodoUseProvider;