import { Trash2 } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';



function TaskItem({ items, deleteItems }) {
  
  const elements = items.map(item => (
    <div key={item.id} className="todo-item w-full min-h-[113px] border rounded-2xl bg-white shadow-md mt-[28px] p-4 dark:bg-gray-900">
      <p className="text-2xl">{item.name}</p>
        
      <div className="flex items-center justify-between gap-5 mt-3 todo-item-elements">
          <Checkbox className="cursor-pointer"/>
          <span className="w-full h-1 bg-gray-300"></span>
          <Trash2 onClick={() => deleteItems(item.id)} className="cursor-pointer"/>
      </div>
    </div>
  ))
  return (
    elements
  )
}

export default TaskItem