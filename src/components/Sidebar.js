import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiGithub } from "react-icons/fi";
import IconContainer from "./IconContainer";

export default function Sidebar() {
  return (
    <div className="hidden lg:visible lg:w-1/4 py-6 pr-6 lg:flex flex-col gap-4">
      <div className="p-6 bg-gray-100 rounded-xl">
        <div className="text-2xl font-bold mb-2 text-center">About me</div>
        <img src="https://unsplash.it/600/600" alt="" className="rounded-xl" />
        <p className="text-gray-500 mt-2 leading-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          officiis similique iste eos maiores adipisci? Quia in dignissimos
          omnis praesentium.
        </p>
      </div>
      <div className="p-6 bg-gray-100 rounded-xl">
        <div className="text-2xl font-bold text-center flex flex-col gap-2 mb-2">
          Categories
        </div>
        <div className="flex gap-2">
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
          <div className="w-full h-8 hover:bg-accent rounded-xl hover:text-white flex items-center justify-center cursor-pointer">
            Math
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-100 rounded-xl">
        <div className="text-2xl font-bold text-center mb-2">Follow us</div>
        <div className="flex gap-2 justify-center">
          <IconContainer>
            <FiInstagram />
          </IconContainer>
          <IconContainer>
            <FiTwitter />
          </IconContainer>
          <IconContainer>
            <FiFacebook />
          </IconContainer>
          <IconContainer>
            <FiGithub />
          </IconContainer>
        </div>
      </div>
    </div>
  );
}
