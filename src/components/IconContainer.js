import React from "react";

export default function IconContainer({ children }) {
  return (
    <div className="w-10 h-10 border-2 border-gray-200 hover:border-none rounded-xl hover:bg-accent hover:text-white flex items-center justify-center text-xl">
      {children}
    </div>
  );
}
