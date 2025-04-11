import { Input } from "../ui/input";
import { Button } from "../ui/button";

function AddTask() {
  return (
    <div className="todo-add grid col-span-2 grid-cols-2 justify-items-end items-baseline mb-5">
        <Input className="
        border 
        border-solid
        border-gray-200/50
        rounded-[10px]
        h-[57px]
        shadow-md
        placeholder: text-gray-500
        text-[24px]
        font-normal
        pl-12
        py-2
        dark:shadow-neutral-800
        outline-0
        focus:text-black
        dark:focus:text-white
        w-[450px]
        "
        placeholder="Add new task"
        />
        <Button className="w-[100px] h-[57px] text-2xl cursor-pointer z-10">Add</Button>
    </div>
  )
}

export default AddTask