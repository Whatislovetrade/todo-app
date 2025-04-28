import { useState } from "react"

import CategoryItem from "../CategoryItem"
import { nanoid } from "nanoid"
import Plus from "../ui/plus"



const categoryArr = [
  { id: nanoid(5), name: "All" },
  { id: nanoid(5), name: "Personal" },
  { id: nanoid(5), name: "Work" },
]

const Category = () => {

  const [addCategory, setAddCategory] = useState(categoryArr)

  const addCategoryItem = () => {
    let newItem = prompt('Введите название категории')
    setAddCategory((prev) => [
      ...prev,
      { id: nanoid(5), name: newItem }
    ]); 
  };

  const onDeleteItem = (id) => {
    setAddCategory((prev) => {
      if (id === prev[0].id) {
        return prev; 
      }
      return prev.filter(item => item.id !== id);
    });
  };
  

    return (
      <aside className="todo-category">
        <ul className="mb-[20px]">
          <CategoryItem addCategory={addCategory} onDelete={onDeleteItem} />
        </ul>
        
        <div
          className="flex gap-[6px] text-gray-400 cursor-pointer items-center add-category hover:text-black"
          onClick={addCategoryItem}
        >
          <Plus />Add Category
        </div>
      </aside>
    )
  }


export default Category
