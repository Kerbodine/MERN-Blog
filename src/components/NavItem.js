import React from "react";

export default function NavItem({ title }) {
  return (
    <div className="px-2 py-1 hover:bg-gray-200 rounded-xl active:bg-accent active:text-white">
      {title}
    </div>
  );
}
