import { useState } from "react"
import classNames from "classnames"

const CategoryItem = ({ categoryArr }) => {

  console.log('Render',categoryArr);
  
  const [isActive, setIsActive] = useState(categoryArr[0].id)
  
  const changeState = (id) => {
    setIsActive(id)
  }

  const elements = categoryArr.map((item) => (
    <li
      key={item.id}
      className={classNames('inline-block hover:bg-gray-50 w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800', {'bg-gray-50 hover:bg-gray-50 dark:bg-gray-800 inline-block w-[167px] h-[47px] text-[24px] rounded-[10px] p-2 mb-1.5 cursor-pointer dark:hover:bg-gray-800': isActive === item.id})}
      onClick={() => changeState(item.id)}
    >
      {item.name}
    </li>
  ))

  return (
    elements
  )
}

export default CategoryItem