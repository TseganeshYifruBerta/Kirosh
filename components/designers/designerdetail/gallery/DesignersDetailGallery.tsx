import Gallery from "@/data/designers/gallery.json";
import Image from "next/image"

const DesignerDetailGallery: React.FC = () => {
  return (
    <div className="grid gap-10 pt-6 pb-8 grid-cols-3 md:grid-cols-3 flex flex-wrap max-sm:grid-cols-2">
      {Gallery.map((image) => (
        <div key={image.id} className="max-sm:h-[180px] h-[250px] lg:h-[350px] ">
        <div className="relative w-full h-full">
          <Image
            src={image.imgurl}
            alt="designer"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
      ))}
    </div>
  );
};


export default DesignerDetailGallery;