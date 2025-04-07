import TodoHeader from "./components/TodoHeader/TodoHeader";

function App() {
  return (
    <div className="flex justify-center items-center min-w-screen h-screen">
      <div className="todo-app bg-white dark:bg-gray-900 dark:shadow-neutral-800 w-3xl min-h-screen rounded-[20px] shadow-2xl">
          <TodoHeader />
      </div>
    </div>

  );
}

export default App;