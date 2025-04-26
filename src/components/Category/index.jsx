import CategoryItem from "../CategoryItem"
import { nanoid } from "nanoid"
import Plus from "../ui/plus"

const Category = () => {

  const categoryArr = [
    { id: nanoid(5), name: "All" },
    { id: nanoid(5), name: "Personal" },
    { id: nanoid(5), name: "Work" },
  ]

  return (
    <aside className="todo-category">
      <ul className="mb-[20px]">
        <CategoryItem categoryArr={categoryArr} />
      </ul>
        
      <div className="flex gap-[6px] text-gray-400 cursor-pointer items-center add-category hover:text-black">
        <Plus />Add Category
      </div>
    </aside>
  )
}

export default Category
