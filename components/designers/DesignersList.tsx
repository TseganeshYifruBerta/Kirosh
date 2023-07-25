import SingleDesignerCard from "./SingleDesignerCard"

const items = [
   <SingleDesignerCard />,
   <SingleDesignerCard />,
   <SingleDesignerCard />,
   <SingleDesignerCard />,
   <SingleDesignerCard />,
   <SingleDesignerCard />,
]
const DesignersList : React.FC = () => {
    return (
        <div className="grid max-sm: lg:grid-cols-2 gap-4 sm:grid-cols-1">
        {items.map((item, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <div className="text-xl font-semibold h-100">{item}</div>
          </div>
        ))}
      </div>
    )
}

export default DesignersList