import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex container mx-auto">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
