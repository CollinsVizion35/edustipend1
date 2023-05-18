import React, { useRef, useState } from "react";

const Sidebar = () => {
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const audioRef4 = useRef(null);
  const audioRef5 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef2.current.pause();
      audioRef3.current.pause();
      audioRef4.current.pause();
      audioRef5.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayPause2 = () => {
    if (isPlaying) {
      audioRef2.current.pause();
    } else {
      audioRef2.current.play();
      audioRef.current.pause();
      audioRef3.current.pause();
      audioRef4.current.pause();
      audioRef5.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayPause3 = () => {
    if (isPlaying) {
      audioRef3.current.pause();
    } else {
      audioRef3.current.play();
      audioRef2.current.pause();
      audioRef.current.pause();
      audioRef4.current.pause();
      audioRef5.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayPause4 = () => {
    if (isPlaying) {
      audioRef4.current.pause();
    } else {
      audioRef4.current.play();
      audioRef2.current.pause();
      audioRef3.current.pause();
      audioRef.current.pause();
      audioRef5.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayPause5 = () => {
    if (isPlaying) {
      audioRef5.current.pause();
    } else {
      audioRef5.current.play();
      audioRef2.current.pause();
      audioRef3.current.pause();
      audioRef4.current.pause();
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-[20vw] bg-[#666666] text-[1.3vw] flex flex-col items-center space-y-7 h-[75%] mt-[10vh] w-fit p-4 mr-16">
      <header className="font-bold">Trending songs</header>

      <div className="flex flex-col space-y-6">
        <div className="bg-white p-2 rounded-[5px] border-[#666666]">
          <audio
            ref={audioRef}
            src="https://www.six9ja.com/wp-content/uploads/2023/03/Davido_Ft_Musa_Keys_-_Unavailable_Six9ja.mp3"
          />
          <button
            onClick={handlePlayPause}
            className="flex flex-row space-x-1 items-center"
          >
            <div>
              Unavailable by <i>Davido</i>
            </div>
            <div className="font-bold flex flex-start">+</div>
          </button>
        </div>
        <div className="bg-white p-2 rounded-[5px] border-[#666666]">
          <audio
            ref={audioRef2}
            src="https://www.six9ja.com/wp-content/uploads/2023/03/Davido_Ft_Musa_Keys_-_Unavailable_Six9ja.mp3"
          />
          <button
            onClick={handlePlayPause2}
            className="flex flex-row space-x-1 items-center"
          >
            <div>
              Unavailable by <i>Davido</i>
            </div>
            <div className="font-bold flex flex-start">+</div>
          </button>
        </div>
        <div className="bg-white p-2 rounded-[5px] border-[#666666]">
          <audio
            ref={audioRef3}
            src="https://www.six9ja.com/wp-content/uploads/2023/03/Davido_Ft_Musa_Keys_-_Unavailable_Six9ja.mp3"
          />
          <button
            onClick={handlePlayPause3}
            className="flex flex-row space-x-1 items-center"
          >
            <div>
              Unavailable by <i>Davido</i>
            </div>
            <div className="font-bold flex flex-start">+</div>
          </button>
        </div>
        <div className="bg-white p-2 rounded-[5px] border-[#666666]">
          <audio
            ref={audioRef4}
            src="https://www.six9ja.com/wp-content/uploads/2023/03/Davido_Ft_Musa_Keys_-_Unavailable_Six9ja.mp3"
          />
          <button
            onClick={handlePlayPause4}
            className="flex flex-row space-x-1 items-center"
          >
            <div>
              Unavailable by <i>Davido</i>
            </div>
            <div className="font-bold flex flex-start">+</div>
          </button>
        </div>
        <div className="bg-white p-2 rounded-[5px] border-[#666666]">
          <audio
            ref={audioRef5}
            src="https://www.six9ja.com/wp-content/uploads/2023/03/Davido_Ft_Musa_Keys_-_Unavailable_Six9ja.mp3"
          />
          <button
            onClick={handlePlayPause5}
            className="flex flex-row space-x-1 items-center"
          >
            <div>
              Unavailable by <i>Davido</i>
            </div>
            <div className="font-bold flex flex-start">+</div>
          </button>
        </div>
      </div>

      <button className="bg-[#FF9900] w-fit p-2 border-[1px] rounded-[5px] border-[#666666]">
        View more
      </button>
    </div>
  );
};

export default Sidebar;
