import DesignerDetailGallery from "@/components/designers/designerdetail/gallery/DesignersDetailGallery";
import { designer1 } from "@/public";
import { mdiStar } from "@mdi/js";
import Image from "next/image"
import { Icon } from "@mdi/react";
import EventsList from "@/components/designers/designerdetail/events/DesignerDetailEventsList";
import ContactDetail from "@/components/designers/designerdetail/contact/DesignerDetailContact";
import CommonDetail from "@/components/designers/designerdetail/Detail";

function DesignerDetail()  {
  return (
    <div>
      <CommonDetail />
      <div>
        <DesignerDetailGallery />
      </div>
      <div>
        <EventsList />
      </div>
      <div>
        <ContactDetail />
      </div>
    </div>
  );
};


export default DesignerDetail;