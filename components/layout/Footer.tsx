import { mdiEmail, mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import { Icon } from "@mdi/react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="max-sm:flex max-sm:flex-wrap font-medium p-4">
      <div className="p-4 pl-0 pb-20">
        <span className="flex flex-wrap max-sm:justify-start max-sm:text-2xl sm:text-5xl text-primary font-extrabold font-primary-font">
          KIROSH design
        </span>
        <div className="text-sm">
          <span>Let’s show the world your unique style.</span>
        </div>
      </div>
      <div>
        <div className="lg:flex lg:flex-wrap">
          <div className="flex flex-wrap lg:w-4/5">
            <div className="lg:w-1/6">Privacy Policy</div>
            <div className="lg:w-1/6 max-sm:pl-4">Terms of Use</div>
          </div>
          <div className="flex flex-wrap lg:w-1/5 justify-end">
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
