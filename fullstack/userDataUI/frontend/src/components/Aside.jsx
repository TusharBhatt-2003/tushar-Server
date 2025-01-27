import React from "react";
import Suggestion from "./Suggestion";
import Messages from "./Messages";

const Aside = () => {
  return (
    <div className="hidden md:block h-screen w-full bg-[#484F48] md:w-1/6">
      <Suggestion />
      <Messages />
    </div>
  );
};

export default Aside;
