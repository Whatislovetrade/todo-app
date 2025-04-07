import TodoHeader from "./components/TodoHeader";
import SearchTasks from "./components/SearchTask";
import { Plus } from "lucide-react";

function App() {
  return (
    <div className="flex justify-center items-center min-w-screen h-screen">
      <div className="todo-app bg-white dark:bg-gray-900 dark:shadow-neutral-800 w-3xl min-h-screen rounded-[20px] shadow-2xl">
        <TodoHeader />
        <SearchTasks />
        <div className="w-[600px] mx-auto grid grid-cols-2 justify-center todo-content mt-[50px]">
          <div className="todo-category">
            <ul className="mb-[20px]">
              <li className="bg-gray-50 dark:bg-zinc-900 inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">All</li>
              <li className="inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">Personal</li>
              <li className="inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">Work</li>
            </ul>
            <div className="flex gap-[6px] text-gray-400 cursor-pointer items-center add-category">
              <Plus size={18} color="rgb(166, 171, 184)" />Add Category
            </div>
          </div>
          <div className="todo-tasks">
            <div className="todo-filter"></div>
            <div className="todo-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;