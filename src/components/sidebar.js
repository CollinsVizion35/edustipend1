import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-[#666666] flex flex-col items-center space-y-4 h-[75vh] w-fit p-4">
      <header className="font-bold">Trending songs</header>

      <div className="flex flex-col space-y-4">
        <button className="border-[#666666] rounded-[5px] bg-[#FFFFFF] border p-2">
          Unavailable by Davido +
        </button>
        <button className="border-[#666666] rounded-[5px] bg-[#FFFFFF] border p-2">
          Unavailable by Davido +
        </button>
        <button className="border-[#666666] rounded-[5px] bg-[#FFFFFF] border p-2">
          Unavailable by Davido +
        </button>
        <button className="border-[#666666] rounded-[5px] bg-[#FFFFFF] border p-2">
          Unavailable by Davido +
        </button>
        <button className="border-[#666666] rounded-[5px] bg-[#FFFFFF] border p-2">
          Unavailable by Davido +
        </button>
      </div>

      <button className="bg-[#FF9900] w-fit p-1 border-[1px] rounded-[5px] border-[#666666]">
        View more
      </button>
    </div>
  );
};

export default Sidebar;
