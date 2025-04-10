import TodoHeader from "./components/TodoHeader";
import SearchTasks from "./components/SearchTask";
import Category from "./components/Category";
import Filter from "./components/Filter/Filter";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="flex justify-center items-center min-w-screen h-screen">
      <div className="todo-app bg-white dark:bg-gray-900 dark:shadow-neutral-800 w-3xl min-h-screen rounded-[20px] shadow-2xl">
        <TodoHeader />
        <SearchTasks />
        <div className="todo-content w-[600px] mx-auto grid grid-cols-2 justify-center mt-[50px]">
            <Category />
          <div className="todo-tasks">
            <Filter />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;