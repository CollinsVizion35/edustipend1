import "./styles.css";

import React from "react";
import Hero from "./components/hero";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="h-screen bg-[#EEEEEE] flex flex-col overflow-x-hidden">
      <div className="navBar h-[20vh]"></div>

      <div className="flex flex-row space-around w-[100vw] ml-[2.5vw] items-center h-[80vh]">
        <Hero />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
