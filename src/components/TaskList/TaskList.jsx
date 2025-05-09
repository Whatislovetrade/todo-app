import TaskItem from "../TaskItem/TaskItem"




function TaskList({items, deleteItems}) {
    return (
    <>
        <TaskItem deleteItems={deleteItems} items={items}/>
    </>

  )
}

export default TaskList