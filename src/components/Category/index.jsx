import { Plus } from "lucide-react";

const Category = () => {
  return (
    <div className="todo-category">
        <ul className="mb-[20px]">
            <li className="bg-gray-50 hover:bg-gray-50 dark:bg-zinc-900 inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">All</li>
            <li className="inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">Personal</li>
            <li className="inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer">Work</li>
        </ul>
        
        <div className="flex gap-[6px] text-gray-400 cursor-pointer items-center add-category">
        <Plus size={18} color="rgb(166, 171, 184)" />Add Category
        </div>
  </div>
  )
}

export default Category
