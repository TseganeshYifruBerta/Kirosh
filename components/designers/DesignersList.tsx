import SingleDesignerCard from "./SingleDesignerCard"
import designersData from "@/data/designers/designers.json"

const DesignersList : React.FC = () => {
    return (
        <div className="grid max-sm: lg:grid-cols-2 gap-4 sm:grid-cols-1 pb-8 pl-8 pr-8">
        {designersData.map((designer) => (
          <div key={designer.id} className="pb-4 bg-gray-100 rounded-lg">
            <div className="text-xl font-semibold h-100">
              <SingleDesignerCard name={designer.name} address={designer.address} bio={designer.bio} imgurl={designer.imgurl} />
            </div>
          </div>
        ))}
      </div>
    )
}

export default DesignersList