import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ToggleGroupItem } from "@radix-ui/react-toggle-group";

const Filter = () => {
  return (
    <div className="todo-filter">
        <ToggleGroup className="flex justify-between text-center bg-white dark:bg-zinc-900" type="single">
            <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 bg-gray-100 p-2.5 rounded-l-lg w-[82px] text-[18px] cursor-pointer shadow-lg" value="all">All</ToggleGroupItem>
            <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 p-2.5 border-r-0 border-l-0 w-[124px] text-[18px] cursor-pointer shadow-lg" value="active">Active</ToggleGroupItem>
            <ToggleGroupItem className="border hover:bg-gray-50 dark:bg-zinc-900 p-2.5 rounded-r-lg w-[155px] text-[18px] cursor-pointer shadow-lg" value="completed">Completed</ToggleGroupItem>
        </ToggleGroup>
    </div>
  )
}

export default Filter