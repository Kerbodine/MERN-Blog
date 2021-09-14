import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiGithub } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import NavItem from "./NavItem";

export default function Topbar() {
  return (
    <div className="w-full h-16 bg-gray-100 sticky top-0 flex items-center px-8 cursor-pointer">
      <div className="w-1/4 flex text-xl gap-2 justify-start">
        <FiInstagram />
        <FiTwitter />
        <FiFacebook />
        <FiGithub />
      </div>
      <div className="w-2/4 flex text-xl gap-2 justify-center">
        <NavItem title="Home" />
        <NavItem title="Write" />
        <NavItem title="About" />
        <NavItem title="Contact" />
      </div>
      <div className="w-1/4 flex justify-end items-center text-xl gap-2">
        <div className="w-10 h-10 rounded-full bg-accent"></div>
        <BiSearch />
      </div>
    </div>
  );
}
