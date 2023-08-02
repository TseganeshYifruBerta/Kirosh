import { designer1 } from "@/public";
import { mdiStar } from "@mdi/js";
import Image from "next/image";
import { Icon } from "@mdi/react";
import Link from "next/link";
import FollowButton from "../common/FollowButton";
interface DesignerProps {
  name: string,
  address: string,
  bio: string,
  imgurl: string,
}
const SingleDesignerCard: React.FC<DesignerProps> = ({name, address, bio, imgurl}) => {
  return (
    <Link href={"/designer/id"}>
    <div className="sm:flex sm:flex-wrap">
      <div className="sm:w-1/2 w-full h-[300px]">
          <div className="relative w-full h-full">
            <Image
              src={imgurl}
              alt="designer"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      <div className="sm:w-1/2 w-full sm:p-2 pl-2 pt-2">
        <div className="flex flex-wrap">
        <div className="sm:pb-8 p-2 h-[100px] self-center items-center">
          <div className="font-bold text-2xl max-sm:text-sm">
            <span>{name}</span>
          </div>
          <div className="text-primary text-xs">
            <span>{address}</span>
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
        <div className="sm:pb-6 p-2 text-sm sm:h-[150px]">
          <span>
          {bio}
          </span>
        </div>
        <div className="flex flex-wrap justify-end h-[30px]">
          <FollowButton />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleDesignerCard;
