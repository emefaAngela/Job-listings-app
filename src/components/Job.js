import { Button } from "./Button";
import { Tag } from "./Tag";
import { Logo } from "./Logo";


const Job = ({jobItem}) => {
  return ( 
    <div className="w-full h-8em rounded-sm p-4 flex flex-col sm:flex-row sm:space-x-4">
      <Logo/>
      <div className="flex flex-col sm:flex-row sm:justify-between"> {jobItem.company}</div>

    </div>
   );
}
 
export default Job;
