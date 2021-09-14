import React from "react";

export default function PostTag({ title }) {
  return (
    <div className="px-2 py-0.5 rounded-md bg-gray-200 hover:bg-accent text-sm mb-2 text-gray-500 hover:text-white cursor-pointer">
      <p>{title}</p>
    </div>
  );
}
