import { mdiEmail, mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import { Icon } from "@mdi/react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="border-t-2 border-gray-400">
      <div className="p-4 pl-0 pb-20">
      <div className="text-primary font-extrabold text-4xl"><span>KIROSH design</span></div>
      <div className="text-sm"><span>
      Let’s show the world your unique style.</span></div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="flex flex-wrap w-4/5">
            <div className="w-1/6">Privacy Policy</div>
            <div className="w-1/6">Terms of Use</div>
          </div>
          <div className="flex flex-wrap w-1/5 justify-end">
            <Link href={""} className="w-1/4">
              <Icon path={mdiTwitter} size={1} color="#ED7966" />
            </Link>
            <Link href={""} className="w-1/4">
              <Icon path={mdiFacebook} size={1} color="#ED7966" />
            </Link>
            <Link href={""} className="w-1/4">
              <Icon path={mdiEmail} size={1} color="#ED7966" />
            </Link>
            <Link href={""} className="w-1/4">
              <Icon path={mdiInstagram} size={1} color="#ED7966" />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
