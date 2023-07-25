import { mdiSearchWeb } from "@mdi/js";
import { Icon } from "@mdi/react";

const Search : React.FC = () => {
    return (
        <div className="max-sm:w-full w-1/2 text-primary-text p-2">
          <div className="flex items-center p-2 mb-10 rounded-lg shadow-md bg-white max-md:w-full justify-center">
            <input
              type="text"
              className="mr-2 p-2 outline-none w-full bg-inherit"
              placeholder="Search hospitals?"
              value={''}
              onChange={() => {}}
            />
           <div>
           <Icon path={mdiSearchWeb} size={1} color="#ED7966" className="text-primary-text text-3xl mr-4 cursor-pointer ml-auto" />
           </div>
              
          
          </div>
        </div>
      );
}

export default Search;