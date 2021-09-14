import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <div className="w-full lg:w-3/4 p-6 flex gap-6 flex-wrap">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
