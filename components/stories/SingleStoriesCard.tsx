import Image from "next/image";
import { Icon } from "@mdi/react/";
import {
  mdiCommentOutline,
  mdiHeartOutline,
  mdiShare,
  mdiShareVariantOutline,
} from "@mdi/js";
import FollowButton from "../common/FollowButton";

interface StoryProps {
  img: string;
  name: string;
  location: string;
  bio: string;
}
const SingleStoriesCard: React.FC<StoryProps> = ({
  img,
  name,
  location,
  bio,
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-8 p-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-5/6 flex flex-wrap">
          <div className="flex flex-wrap">
            <div className="flex justify-center -ml-[60px] mx-auto rounded-full relative w-[85px] h-[85px]">
              <Image
                src={img}
                alt="logo"
                className="rounded-full object-cover "
                fill
              />
            </div>
            <div className="p-4 pt-0">
              <div className="text-xl font-bold">{name}</div>
              <div className="text-primary">{location}</div>
              <FollowButton />
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-5/6">
              <div className="sm:w-5/6 w-full h-[400px]">
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt="picture"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap pt-2">
                <div className="mr-2">
                  <Icon
                    path={mdiHeartOutline}
                    size={1}
                    className="text-primary"
                  />
                </div>
                <div className="mr-2">
                  <Icon
                    path={mdiCommentOutline}
                    size={1}
                    className="text-primary"
                  />
                </div>
                <div className="mr-2">
                  <Icon
                    path={mdiShareVariantOutline}
                    size={1}
                    className="text-primary"
                  />
                </div>
              </div>
              <div>
                <div>
                  <span className="font-bold">2043 Likes</span>
                </div>
                <div>
                  <span>{bio}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStoriesCard;
