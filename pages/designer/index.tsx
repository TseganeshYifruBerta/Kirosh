import Search from "@/components/common/Search";
import DesignersList from "@/components/designers/DesignersList";

function DesignersPage()  {
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

export default DesignersPage;