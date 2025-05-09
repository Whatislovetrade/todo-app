import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

function AddTask({addItems}) {
  const [value, setValue] = useState('')
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleAdd = () => {
    if (value.trim() === "") return
    addItems(value);
    setValue(""); // очищаем поле
  }
  

  return (
    <div className="grid items-baseline grid-cols-2 col-span-2 mb-5 todo-add justify-items-end">
      <Input onChange={handleChange} value={ value } className="
        border 
        border-solid
        border-gray-200/50
        rounded-[10px]
        h-[57px]
        shadow-md
        placeholder: text-gray-500
        text-[24px]
        font-normal
        pl-3
        py-2
        dark:shadow-neutral-800
        outline-0
        focus:text-black
        dark:focus:text-white
        w-[450px]
        "
        placeholder="Add new task"
        />
      <Button onClick={handleAdd}
        className="w-[100px] h-[57px] text-2xl cursor-pointer z-10">Add</Button>
    </div>
  )
}

export default AddTask