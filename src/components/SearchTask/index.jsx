import { Input } from "../ui/input"

const SearchTasks = ({ searchIcon }) => {  
  return (
    <div className="w-full sm:min-w-[600px]">
      <Input
      className="
            input-task
            border 
            border-solid
            border-gray-200/50
            rounded-[10px]
            w-full
            sm:min-w-[600px]
            h-[67px]
            shadow-md
            placeholder: text-gray-500
            text-[24px]
            font-normal
            pl-12
            py-2
            dark:shadow-neutral-800
            outline-0
            focus:text-black
            dark:focus:text-white
        "
      type="text"
      name="search"
      placeholder="Search tasks"
      searchIcon={searchIcon}
  />
    </div>
    
  )
}

export default SearchTasks