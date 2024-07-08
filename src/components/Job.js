//imports
import { Button } from "./Button"
import { Tag } from "./Tag"
import { Logo } from "./Logo"
import { tw } from "../utils/tailwind"


//Job component
const Job = ({jobItem,handleFilterClick}) => {
  return ( 
    <div className={tw(
      'w-full h-8em',
      'rounded-md p-4 flex flex-col my-16 sm:my-4',
      'bg-[white]',
      '  sm:flex-row sm:justify-between sm:space-x-4'
      )}>
      <div className={tw(
        'flex flex-col sm:flex-row',
        'sm:space-x-4 space-y-4'
        )}>
      <Logo className={tw(
        '-mt-16 sm:mt-4'
      )}
      src={process.env.PUBLIC_URL + jobItem.logo}
      />
      <div className={tw(
        'flex flex-col',
        'space-y-4'
        )}>
      <div className={tw(
        'flex flex-col   sm:flex-row ',
        ' sm:space-x-6 '
        )}> 
        <div className={tw(
          'font-medium',
          'text-[color:hsl(180,29%,50%)]'
          )}>
            {jobItem.company}
         </div>
        <div className={tw(
          'flex flex-row',
          'space-x-2'
          )}>
          <div>
            {jobItem.new ? (<Button $new>NEW!</Button>): null}
            </div>
          <div>
            {jobItem.featured?(<Button>FEATURED</Button>): null}
            </div>
        </div>
      </div>
      <div className={tw(
        'font-bold text-black',
        'hover:text-[color:hsl(180,29%,50%)]'
        )}>
          {jobItem.position}
        </div>
      <div className={tw("flex space-x-2 text-[hsl(180,8%,52%)]  font-medium")}>
        <div className={tw(
          'text-[color:hsl(180, 52%, 96%)]'
        )}>{jobItem.postedAt}</div>
        <div className="">.</div>
        <div>{jobItem.contract}</div>
        <div>.</div>
        <div>{jobItem.location}</div>
      </div>
      </div>
      </div>
      <div className={tw(
        'space-x-2  sm:-ml-0',
        'text-[color:hsl(180,29%,50%)]',
        'font-semibold'
        )}>
        <Tag
         onClick={()=>handleFilterClick(jobItem.role)}
         className={tw(
          'cursor-pointer hover:bg-[color:hsl(180,29%,50%)]'
         )}
         >
          {jobItem.role}
         </Tag>
        <Tag 
        onClick={()=>handleFilterClick(jobItem.level)}
        className={tw(
          'cursor-pointer hover:bg-[color:hsl(180,29%,50%)]'
         )}
        >
          {jobItem.level}
        </Tag>
        <span className={tw(
          "space-x-2"
          )}>
          {jobItem.languages.map((language) => 
          <Tag 
          onClick={()=>handleFilterClick(language)}
          className={tw(
            'cursor-pointer hover:bg-[color:hsl(180,29%,50%)]'
           )}
          >
            {language}
          </Tag>)}
        </span>
      </div>
    </div>
   );
}
 
export default Job;
