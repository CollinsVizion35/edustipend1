import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-start space-y-12 w-4/5 pl-[10vw] h-fit">
      <div className="flex flex-col items-start">
        <div className="text-[4vw] font-bold">Make your party fun!</div>
        <div className="text-[1.5vw]">
          Create your own custom playlist today.
        </div>
      </div>
      <button className="bg-[#FF9900] p-2 text-[1vw] border-[1px] rounded-[5px] border-black  mt-1">
        Create playlist
      </button>
    </div>
  );
};

export default Hero;
