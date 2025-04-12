// import { Plus } from "lucide-react";
import Plus from "../ui/plus"

const Category = () => {
  return (
    <aside className="todo-category">
        <ul className="mb-[20px]">
            <li className="bg-gray-50 hover:bg-gray-50 dark:bg-gray-800 inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800">All</li>
            <li className="inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800">Personal</li>
            <li className="inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800">Work</li>
        </ul>
        
        <div className="flex gap-[6px] text-gray-400 cursor-pointer items-center add-category hover:text-black">
        <Plus />Add Category
        </div>
    </aside>
  )
}

export default Category

{/* <Plus size={18} color="rgb(166, 171, 184)" /> */}