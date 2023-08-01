import Image from "next/image"
interface EventProps {
  img: string,
  description: string,
  date: string,
  location : string
}

const SingleEventCard: React.FC<EventProps> = ({img, description, date, location}) => {
  return (
    <div>
      <div>
        <Image src={img} alt={""} />
      </div>
      <div>
        <div>
          <span>
            
          </span>
        </div>
        <div>
          <span>{location}</span>
        </div>
        <div>
          <span>{date}</span>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
