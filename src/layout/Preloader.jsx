import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center gap-4 bg-white">

      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-500"></div>

  
      <div className="flex text-lg sm:text-xl font-semibold text-blue-500">
        Loading
        <span className="ml-1 animate-bounce">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.15s]">.</span>
        <span className="ml-1 animate-bounce [animation-delay:0.3s]">.</span>
      </div>

    </div>
  );
};

export default PreLoader;
