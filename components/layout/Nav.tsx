import { mdiClose, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useState } from "react";

const Nav: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const handleSetMenu = () => {
        setMenu(!menu);
    }
  return (
<div className="sticky flex top-0 items-center h-full justify-between px-5 z-50 bg-white py-2 shadow-sm border-b-2 border-gray-100">
     <div className="flex flex-wrap w-3/6 font-bold max-sm:hidden max-lg:text-sm pb-0">
        <div className="w-1/4 flex flex-wrap">
          <Link href={"/"}><span className="w-full flex flex-wrap justify-center text-primary pl-6">HOME</span></Link>
        </div>
        <div className="w-1/4 flex flex-wrap">
          <Link href={"/designer"}><span className="w-full flex flex-wrap justify-center">DESIGNERS</span></Link>
        </div>
        <div className="w-1/4 flex flex-wrap">
          <Link href={""}><span className="w-full flex flex-wrap justify-center">STORIES</span></Link>
        </div>

        <div className="w-1/4 flex flex-wrap">
          <Link href={""}><span className="w-full flex flex-wrap justify-center">EVENTS</span></Link>
        </div>
      </div>
      
      <div className="max-sm:w-5/6 w-3/6 self-center">
        <span className="flex flex-wrap justify-end max-sm:justify-start max-sm:text-2xl sm:text-5xl text-primary font-extrabold font-primary-font">KIROSH</span>
      </div>
      <div className="max-sm:w-1/6 flex flex-wrap">
      <button onClick={handleSetMenu} className={`max-sm:block hidden flex flex-wrap self-center ml-4 hover:text-gray-900 w-full`}>
     <Icon path={mdiMenu} size={1} color="#ED7966" className="justify-end self-center"/>
     </button>
     <div className={`fixed top-4 right-0 h-full w-3/5 max-lg:block bg-white shadow-lg transform ${
                menu ? "translate-x-0" : "translate-x-full"
              } transition-all duration-300`}
              style={{ zIndex: 9999 }}>
                <div className="px-6 sm:px-8 sm:pt-0 h-full overflow-y-auto">
                <div className="py-4 flex flex-wrap justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-900"
                    onClick={handleSetMenu}
                  >
                    <Icon className="text-sm flex flex-wrap w-full justify-end text-primary" path={mdiClose} size={1}/>
                  </button>
                </div>
                <div>
                  <div className="p-2 pb-0"><button><span>HOME</span></button></div>
                 <div className="p-2 pb-0"> <button><span>DESIGNERS</span></button></div>
                  <div className="p-2 pb-0"><button><span>STORIES</span></button></div>
                  <div className="p-2 pb-0"><button><span>EVENTS</span></button></div>
                </div>
                
              </div>
        
     </div>
      </div>
    </div>
  );
};

export default Nav;

