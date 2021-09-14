import React from "react";
import PostTag from "./PostTag";

export default function Post() {
  return (
    <div className="bg-gray-100 rounded-xl p-6 lg:w-[calc(50%-0.75rem)]">
      <img
        src="https://unsplash.it/1200/400"
        alt=""
        className="rounded-xl w-full h-48 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-3xl font-bold mb-1">Post title</h3>
        <div className="flex gap-2 text-gray-500">
          <p>Post date</p>
          <p>|</p>
          <PostTag title="tag-1" />
          <PostTag title="tag-2" />
        </div>
        <hr className="h-0.5 my-2 bg-gray-300" />
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iusto
          libero adipisci voluptatum esse. Error cum vero eligendi cupiditate,
          repudiandae sint commodi fugit, maiores minima ducimus placeat
          perspiciatis quos reprehenderit?
        </p>
      </div>
    </div>
  );
}
