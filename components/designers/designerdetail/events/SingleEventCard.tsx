import Image from "next/image"
interface EventProps {
  img: string,
  description: string,
  date: string,
  location : string,
  eventName: string,
}

const SingleEventCard: React.FC<EventProps> = ({img, description, date, location, eventName}) => {
  return (
    <div className="flex flex-wrap rounded-xl bg-gray-100 mr-20 ml-10 my-6">
    <div className="sm:w-1/4 w-full h-[200px]">
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
     <div className="flex flex-wrap">
     <div className="self-center pl-6 grid grid-row-4 gap-6">
        <div>
          <span>
           <span className="font-bold">Event : </span> {eventName} 
          </span>
        </div>
        <div>
        <span className="font-bold">Location : </span> <span>{location}</span>
        </div>
        <div>
        <span className="font-bold">Date : </span><span>{date}</span>
        </div>
        <div>
        <span className="font-bold">Description : </span><span>{description}</span>
        </div>
      </div>
     </div>
    </div>
  );
};

export default SingleEventCard;
