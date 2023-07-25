import Search from "../common/Search";
import DesignersList from "./DesignersList"

const Designers : React.FC = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center"> 
                <Search />
            </div>
            <div>
                <DesignersList />
            </div>
        </div>
    )
}

export default Designers;