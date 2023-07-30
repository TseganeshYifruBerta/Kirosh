import Search from "@/components/common/Search";
import DesignersList from "@/components/designers/DesignersList";
import DesignerDetailGallery from "@/components/designers/designerdetail/DesignersDetailGallery";

function DesignersPage() {
  return (
    <div>
      <Search />
      <div>
        <DesignersList />
      </div>
    </div>
  );
}

export default DesignersPage;
