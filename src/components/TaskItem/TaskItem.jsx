import { Trash2 } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';



function TaskItem({taskArray}) {

  const elements = taskArray.map(item => (
    <div key={item.id} className="todo-item w-full min-h-[113px] border rounded-2xl bg-white shadow-md mt-[28px] p-4 dark:bg-gray-900">
      <p className="text-2xl">{item.name}</p>
        
      <div className="todo-item-elements flex justify-between gap-5 items-center mt-3">
          <Checkbox className="cursor-pointer"/>
          <span className="h-1 w-full bg-gray-300"></span>
          <Trash2 className="cursor-pointer"/>
      </div>
    </div>
  ))
  return (
    elements
  )
}

export default TaskItem