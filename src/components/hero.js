import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-start space-y-2 w-4/5 pl-[10vw] h-fit">
      <div className="text-4xl font-bold">Make your party fun!</div>
      <div className="">Create your own custom playlist today.</div>
      <button className="bg-[#FF9900] p-1 border-[1px] rounded-[5px] border-black mt-2">
        Create playlist
      </button>
    </div>
  );
};

export default Hero;
