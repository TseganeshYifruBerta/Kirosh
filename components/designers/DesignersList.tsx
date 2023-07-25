import SingleDesignerCard from "./SingleDesignerCard"
import designersData from "@/data/designers/designers.json"

const DesignersList : React.FC = () => {
    return (
        <div className="grid max-sm: lg:grid-cols-2 gap-4 sm:grid-cols-1">
        {designersData.map((designer) => (
          <div key={designer.id} className="p-4 border border-gray-300 rounded">
            <div className="text-xl font-semibold h-100">
              <SingleDesignerCard name={designer.name} address={designer.address} bio={designer.bio} id={designer.id} />
            </div>
          </div>
        ))}
      </div>
    )
}

export default DesignersList