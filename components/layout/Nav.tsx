const Nav: React.FC = () => {
  return (
    <div className="flex flex-wrap border-b-2 border-gray-400">
      <div className="flex flex-wrap w-3/6 font-bold">
        <div className="w-1/4 flex flex-wrap">
          <span className="w-1/2 flex flex-wrap justify-center">HOME</span>
          <span className="w-1/2 flex flex-wrap justify-center">/</span>
        </div>
        <div className="w-1/4 flex flex-wrap">
          <span className="w-1/2 flex flex-wrap justify-center">DESIGNERS</span>
          <span className="w-1/2 flex flex-wrap justify-center">/</span>
        </div>
        <div className="w-1/4 flex flex-wrap">
          <span className="w-1/2 flex flex-wrap justify-center">STORIES</span>
          <span className="w-1/2 flex flex-wrap justify-center">/</span>
        </div>

        <div className="w-1/4 flex flex-wrap">
          <span className="w-1/2 flex flex-wrap justify-center">EVENTS</span>
          <span className="w-1/2 flex flex-wrap justify-center">/</span>
        </div>
      </div>
      <div className="w-3/6 self-center">
        <span className="flex flex-wrap justify-end text-4xl text-primary font-extrabold font-primary-font">KIROSH</span>
      </div>
    </div>
  );
};

export default Nav;
