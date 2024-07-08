//imports
import { tw } from "../utils/tailwind"
import { Tag } from "./Tag";

//ActiveFilter component
const ActiveFilter = ({filter,handleFilterClick}) => {
  return ( 
    <div className={tw(
      'flex flex-row items-center ',
      'rounded-sm border-none',
      ''
    )}>
      <Tag>
        {filter}
      </Tag>
      <div className={tw(
        'font-semibold',
        'hover:bg-black bg-[color:hsl(180,29%,50%)] text-white',
        'text-center  text-[#ffff] h-8',
        'cursor-pointer pt-0.5 px-3'
      )}
      onClick={()=>{handleFilterClick(filter)}}
      >
        x
      </div>
    </div>
   );
}
 
export default ActiveFilter;