import { mdiSearchWeb } from "@mdi/js";
import { Icon } from "@mdi/react";

const Search : React.FC = () => {
    return (
        <div className="pl-8 pt-2 max-sm:w-full w-1/2 text-primary-text">
          <div className="flex items-center p-2 mb-10 rounded-3xl shadow-md bg-white max-md:w-full justify-center self-center">
            <input
              type="text"
              className="mr-2 p-2 outline-none w-full"
              placeholder="Get designers?"
              value={''}
              onChange={() => {}}
            />
           <div>
            <div className="flex flex-wrap item-center">
            <Icon path={mdiSearchWeb} size={1} color="#ED7966" className="text-primary-text text-3xl mr-4 cursor-pointer ml-auto" />
            </div>
           
           </div>
              
          
          </div>
        </div>
      );
}

export default Search;