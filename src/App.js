import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';
import TodoObContext from './TodoObContext'

function App() {
  const todoOb=[{ item: "Cook Breakfast", status: "Complete" }, { item: "do Coding", status: "incomplete" }]
  return (
    <div className="App">
      <TodoObContext.Provider value={todoOb}>
        <TodoApp/>
      </TodoObContext.Provider>
      
    </div>
  );
}

export default App;
