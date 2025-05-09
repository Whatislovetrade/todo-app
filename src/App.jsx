import TodoHeader from "./components/TodoHeader";
import SearchTasks from "./components/SearchTask";
import Category from "./components/Category";
import Filter from "./components/Filter/Filter";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import { nanoid } from 'nanoid';
import { useState } from "react";



const taskArray = [
  {id: nanoid(), name: 'lore'},
  {id: nanoid(), name: 'lore'}
]


function App() {
  const [items, setItems] = useState(taskArray)
  const addItems = (name) => { 
    setItems(prev => [...prev, {id: nanoid(), name}])
  } 
  
  return (
    <div className="flex items-center justify-center h-full min-w-screen">
      <div className="todo-app bg-white dark:bg-gray-900 dark:shadow-neutral-800 w-3xl min-h-screen rounded-[20px] shadow-2xl">
        <TodoHeader />
        <SearchTasks searchIcon={true} />
        <section className="todo-content w-screen sm:w-[600px] px-5 sm:px-0 mx-auto grid grid-cols-2 justify-center mt-[50px]">
          <Category />
          <div className="todo-tasks">
            <Filter />
            <TaskList items={items} />
          </div>
          <AddTask addItems={ addItems } />
        </section>
     
      </div>
    </div>
  );
}

export default App;