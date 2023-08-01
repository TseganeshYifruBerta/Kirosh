import { designer1 } from "@/public";
import Image from "next/image";
import { Icon } from "@mdi/react";
import { mdiStar } from "@mdi/js"

const CommonDetail : React.FC = () => {
    return (
      <div>
        <div className="flex flex-wrap font-bold pb-16 pt-10">
        <div className="w-1/2 pr-4">
          <div className="text-2xl pb-6 pt-20">Bio</div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur voluptates nisi eveniet aliquid provident consectetur,
            neque aliquam commodi nemo vel facere eligendi rerum officiis
            tenetur placeat quos ex quaerat repudiandae cum expedita, nesciunt
            corporis adipisci perferendis distinctio? Aliquid, quibusdam iste!
            Modi animi rem consectetur sit et ipsam corporis unde nihil?
          </div>
        </div>
        <div className="w-1/2">
        <div className="w-full max-lg:h-[240px] lg:h-[300px]">
          <div className="relative w-full h-full">
            <Image
              src={designer1}
              alt="designer"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
          <div>
            <div>Olivia Rodriguez</div>
            <div>876 Cedar Road, Seaside, USA</div>
            <div>
              <span>5+ Year Expirience</span>
            </div>
            <div className="flex flex-wrap">
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
            <Icon path={mdiStar} size={1} color="#D5695C" />
          </div>
          </div>
        </div>
      </div>
     <div className="flex flex-wrap mx-10">
     <div className="flex flex-wrap w-4/5">
        <div className="w-1/6">Gallery</div>
        <div className="w-1/6">Events</div>
        <div className="w-1/6">About</div>
        <div className="w-1/6">Contact</div>
      </div>
     </div>
      </div> 
    );
}

export default CommonDetail;