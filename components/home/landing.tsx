import Image from "next/image"
import { landing } from "@/public";

const LandingPage : React.FC = () => {
    return (
        <div className="flex flex-wrap max-lg:p-2 p-20">
            <div className="max-sm:w-full w-1/2 flex flex-wrap self-center max-sm:justify-center">
                <div>
                <div className="max-sm:text-xl text-4xl font-primary-font pb-4 font-bold">
                    <span>Let’s show the world your unique style</span>
                </div>
                <div className="flex flex-wrap w-2/3 pb-2 text-lg font-md max-sm:text-sm">
                    <span>
                    Whether you're a designer looking to showcase your creations or a Customer looking for something special
                    </span>
                </div>
                
                </div>
            </div>
            <div className="max-sm:w-full max-sm:p-6 lg:pb-2 w-1/2 lg:flex lg:flex-wrap justify-center self-center">
                <Image src={landing} alt={""}/>
            </div>
            <div className="flex flex-wrap max-sm:w-1/2  w-2/6 bg-primary px-2 py-1 rounded-lg justify-center">
                    <span>Get the Designers</span>
                </div>
        </div>
    )
}

export default LandingPage;