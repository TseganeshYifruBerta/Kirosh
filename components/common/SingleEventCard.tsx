import Image from "next/image";
import FollowButton from "./FollowButton";
interface EventProps {
  img: string;
  description: string;
  date: string;
  location: string;
  eventName: string;
}

const SingleEventCard: React.FC<EventProps> = ({
  img,
  description,
  date,
  location,
  eventName,
}) => {
  return (
    <div className="flex flex-wrap rounded-xl bg-gray-100 mr-20 ml-10 my-6">
      <div className="sm:w-1/4 w-full h-[300px]">
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt="designer"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-3/4">
        <div className="self-center pl-6 grid grid-row-4 gap-6 w-full">
          <div>
            <span>
              <span className="font-bold">Event : </span> {eventName}
            </span>
          </div>
          <div>
            <span className="font-bold">Location : </span>{" "}
            <span>{location}</span>
          </div>
          <div>
            <span className="font-bold">Date : </span>
            <span>{date}</span>
          </div>
          <div>
            <span className="font-bold">Description : </span>
            <span>{description}</span>
          </div>
          <div className="flex flex-wrap pb-2">
            
            <div className="rounded-full relative w-[85px] h-[85px] mr-2">
              <Image
                src={img}
                alt="logo"
                className="rounded-full object-cover "
                fill
              />
            </div>
            <div className="">
              {/* name */}
              <div className="text-xl font-bold">{eventName}</div>
              <div className="text-primary">{location}</div>
              <FollowButton />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
