import { useState } from "react"
import classNames from "classnames"
import { Trash2 } from 'lucide-react';


const CategoryItem = ({ addCategory, onDelete }) => {
  
  const [isActive, setIsActive] = useState(addCategory[0].id)
  
  const changeState = (id) => {
    setIsActive(id)
  }

  const elements = addCategory.map((item) => (

      <li
        key={item.id}
        className={classNames('inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800', {'bg-gray-50 hover:bg-gray-50 dark:bg-gray-800 inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800': isActive === item.id})}
        onClick={() => changeState(item.id)}
      >
        
        {item.name}
        <Trash2 
          className="relative left-[180px] bottom-8"
          onClick={() => onDelete(item.id)}
        />

      </li>
  ))

  return (
    elements
  )
}

export default CategoryItem