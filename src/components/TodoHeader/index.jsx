import { ModeToggle } from "../Toggle"

const TodoHeader = () => {
  return (
    <div className="todo-header flex justify-center items-center relative">
        <h1 className="text-center pt-10 text-[40px] font-[Inter] font-bold">To-Do List</h1>
        <ModeToggle />
    </div>
  )
}

export default TodoHeader
