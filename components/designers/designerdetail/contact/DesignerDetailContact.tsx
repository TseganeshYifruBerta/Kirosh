import { mdiEmail, mdiInstagram, mdiPhone, mdiWeb } from "@mdi/js";
import { Icon } from "@mdi/react";

const ContactDetail: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-3xl m-10 p-4">
      <div className="mb-4 text-2xl font-bold">Contact</div>
      <div className="grid grid-row-4 gap-4">
        <div className="flex flex-wrap">
          <div className="pl-2">
            <Icon path={mdiPhone} size={1} color="#D5695C" />
          </div>
          <div className="pl-2">
            <span>Phone Number</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="pl-2">
            <Icon path={mdiEmail} size={1} color="#D5695C" />
          </div>
          <div className="pl-2">
            <span>email</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="pl-2">
            <Icon path={mdiInstagram} size={1} color="#D5695C" />
          </div>
          <div className="pl-2">
            <span>instagram Account</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="pl-2">
            <Icon path={mdiWeb} size={1} color="#D5695C" />
          </div>
          <div className="pl-2">
            <span>website</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
