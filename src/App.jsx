import TodoHeader from "./components/TodoHeader";
import SearchTasks from "./components/SearchTask";
import Category from "./components/Category";
import { ToggleGroup } from "./components/ui/toggle-group";
import { ToggleGroupItem } from "@radix-ui/react-toggle-group";

function App() {
  return (
    <div className="flex justify-center items-center min-w-screen h-screen">
      <div className="todo-app bg-white dark:bg-gray-900 dark:shadow-neutral-800 w-3xl min-h-screen rounded-[20px] shadow-2xl">
        <TodoHeader />
        <SearchTasks />
        <div className="w-[600px] mx-auto grid grid-cols-2 justify-center todo-content mt-[50px]">
            <Category />
          <div className="todo-tasks">
            <div className="todo-filter">
            <ToggleGroup className="flex justify-between text-center bg-white" type="single">
              <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 bg-gray-100 p-2.5 rounded-l-lg w-[82px] text-[18px] cursor-pointer shadow-lg" value="all">All</ToggleGroupItem>
              <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 p-2.5 border-r-0 border-l-0 w-[124px] text-[18px] cursor-pointer shadow-lg" value="active">Active</ToggleGroupItem>
              <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 p-2.5 rounded-r-lg w-[155px] text-[18px] cursor-pointer shadow-lg" value="completed">Completed</ToggleGroupItem>
            </ToggleGroup>

            </div>
            <div className="todo-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;