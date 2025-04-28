import TaskItem from "../TaskItem/TaskItem"
import { nanoid } from 'nanoid';


const taskArray = [
  {id: nanoid(), name: 'lore'},
  {id: nanoid(), name: 'lore'}
]

function TaskList() {
    return (
    <>
        <TaskItem taskArray={taskArray}/>
    </>

  )
}

export default TaskList