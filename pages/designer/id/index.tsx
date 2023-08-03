import DesignerDetailGallery from "@/components/designers/designerdetail/gallery/DesignersDetailGallery";
import {useState} from "react";
import { designer1 } from "@/public";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import { Icon } from "@mdi/react";
import EventsList from "@/components/designers/designerdetail/events/DesignerDetailEventsList";
import ContactDetail from "@/components/designers/designerdetail/contact/DesignerDetailContact";
import DesignerDetails from "@/components/designers/designerdetail/DesignerDetail";
import Link from "next/link";
import DesignerDetailAbout from "@/components/designers/designerdetail/about/DesignerDetailAbout";

function DesignerDetail() {
  const [activeSection, setActiveSection] = useState("gallery")
  const  handleActiveSection = (section : string) => {
    setActiveSection(section)
  }
  return (
    <div>
      <DesignerDetails />
      <div className="grid grid-cols-8 mx-10 font-bold">
        
          <Link onClick={() => handleActiveSection("gallery")} href={""}>
          <div className={`w-1/6 ${activeSection == "gallery" ? "text-primary" : ""}`}>Gallery</div>
          </Link>
          <Link onClick={() => handleActiveSection("events")} href={""}>
          <div className={`w-1/6 ${activeSection == "events" ? "text-primary" : ""}`}>Events</div>
          </Link>
         <Link onClick={() => handleActiveSection("about")} href={""}>
         <div className={`w-1/6 ${activeSection == "about" ? "text-primary" : ""}`}>About</div>
         </Link>
          <Link onClick={() => handleActiveSection("contact")} href={""}>
          <div className={`w-1/6 ${activeSection == "contact" ? "text-primary" : ""}`}>Contact</div>
          </Link>
       
      </div>
     {activeSection == "gallery" &&  <div>
        <DesignerDetailGallery />
      </div>}
      {
        activeSection == "events" && <div>
        <EventsList />
      </div>
      }
     {
      activeSection == "contact" &&  <div>
      <ContactDetail />
    </div>
     }
     {
      activeSection == "about" && <div>
        <DesignerDetailAbout />
      </div>
     }
    </div>
  );
}

export default DesignerDetail;
