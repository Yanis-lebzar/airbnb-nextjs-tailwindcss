import Image from "next/image";
import React from "react";

function LargeCard({ img, title, descr, buttonText }) {
  return (
    <div className="relative h-96 min-w-[280px]">
      <div>
        <Image
          alt="largeCard"
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl "
        />
      </div>
      <div className="absolute top-20 left-12">
        <h3 className=" text-4xl mb-3 ">{title}</h3>
        <h4 className="font-semibold text-sm">{descr}</h4>
        <button className="text-white bg-gray-900 text-sm px-4 py-2 mt-5 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
