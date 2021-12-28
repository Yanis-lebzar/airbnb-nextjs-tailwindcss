import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* LEFT */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo-airbnb"
        />
      </div>

      {/* MIDDLE */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end text-gray-500  ">
        <p className="hidden md:inline sm:text-sm md:text-sm lg:text-base cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="hidden sm:inline   h-6 cursor-pointer" />
        <div className="flex items-center border-2 space-x-2 rounded-full p-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
