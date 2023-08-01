import Image from "next/image";
import { landing } from "@/public";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-wrap max-lg:p-2 pt-16 pl-16">
      <div className="max-sm:w-full w-1/2 flex flex-wrap self-center max-sm:justify-center">
        <div>
          <div className="max-sm:text-xl text-4xl font-primary-font pb-4 font-bold">
            <span>Let&apos;s show the world your <span className="text-primary font-bold">UNIQUE STYLE</span></span>
          </div>
          <div className="flex flex-wrap w-2/3 pb-2 text-lg font-md max-sm:text-sm">
            <span>
              Whether you&apos;re a designer looking to showcase your creations
              or a Customer looking for something special
            </span>
          </div>
        </div>
      </div>
      <div className="max-sm:w-full max-sm:p-6 lg:pb-2 w-1/2 lg:flex lg:flex-wrap justify-center self-center">
        <Image src={landing} alt={""} />
      </div>
      <Link
        href={"/designer"}
        className="flex flex-wrap max-sm:w-1/2  w-1/6 bg-primary px-2 py-1 rounded-lg justify-center font-bold text-lg"
      >
        <span>Get the Designers</span>
      </Link>
    </div>
  );
};

export default LandingPage;
