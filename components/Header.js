import Image from "next/image";
import React from "react";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import discover from "../assets/discover.png";
import hearth from "../assets/hearth.png";
import search from "../assets/search.png";
import arrowdown from "../assets/arrowdown.png";
import instagram from "../assets/instagram.png";

const Header = () => {
  return (
    <div className="shadow-sm border-b  ">
      <div className="flex justify-between h-[59px] max-w-[61rem]  m-auto">
        {/* Left */}
        <div className="flex mt-1 ml-4 flex-[1_0_127px] pr-2">
          <div className="flex items-center cursor-pointer ">
            <Image src={instagram} height={38} width={110} />
          </div>
          <div className="flex items-center -mt-1 pl-1">
            <Image src={arrowdown} width={12} height={12} />
          </div>
        </div>

        {/* Middle */}
        <div className="w-[17rem]">
          <div className="relative h-full hidden sm:flex sm:items-center">
            <div className="absolute inset-y-0 flex items-center  pl-4 pointer-events-none">
              <Image src={search} height={16} width={16} />
            </div>
            <input
              className=" bg-[#efefef] h-9 pl-11 w-full rounded-md border-none font-thin focus:ring-0"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-[1.36rem] flex-[1_0_127px] justify-end pl-12 mr-6 w-full">
          <div className="navBtn">
            <Image src={home} />
          </div>

          <div className="relative navBtn ">
            <Image src={message} />
            <div
              className="absolute -top-1.5 -right-2 text-xs w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center
              text-white"
            >
              1
            </div>
          </div>

          <div className="navBtn">
            <Image src={upload} />
          </div>

          <div className="navBtn">
            <Image src={discover} />
          </div>

          <div className="navBtn">
            <Image src={hearth} />
          </div>

          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              alt="Sign Out"
              className="h-6 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;