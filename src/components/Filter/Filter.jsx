import { useState } from "react";

import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { nanoid } from "nanoid";
import classNames from "classnames";

const filterArr = [
  {id: nanoid(), name: 'All'},
  {id: nanoid(), name: 'Active'},
  {id: nanoid(), name: 'Completed'},
]


const Filter = () => {

  const [isActive, setIsActive] = useState(filterArr[0].id)

  const changeState = (id) => {
    setIsActive(id)
  }

  const elements = filterArr.map(item => (
    <ToggleGroupItem
      key={item.id}
      className={classNames('border hover:bg-gray-50 dark:bg-gray-900 p-2.5 border-r-0 border-l-0 w-[124px] text-[18px] cursor-pointer shadow-lg dark:hover:bg-gray-800" value="active"', { 'border hover:bg-gray-50 dark:bg-gray-900 bg-gray-100 p-2.5 rounded-l-lg w-[82px] text-[18px] cursor-pointer shadow-lg dark:hover:bg-gray-800" value="all': isActive === item.id })}
      onClick={() => changeState(item.id)}
    >
      {item.name}
    </ToggleGroupItem>
  ))

  


  return (
    <div className="todo-filter">
        <ToggleGroup className="flex justify-between text-center bg-white dark:bg-gray-900" type="single">
          {elements}
        </ToggleGroup>
    </div>
  )
}

export default Filter