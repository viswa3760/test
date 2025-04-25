import React from "react";
import Image from "next/image";

export default function AccountSettings() {
  return (
    <div className="flex flex-col">
      <div >
        {/* Header */}
  

        {/* Profile Section */}
        <div className="px-5 mt-[30px]" >
          <div className="flex  space-x-4">
            <div className="relative">
              <div className="w-16  h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/user.png"
                  alt="User Profile"
                  fill
                  sizes="(max-width: 768px) 48px, 64px"
                  className="object-cover"
                />
              </div>
              {/* Camera icon overlay */}
              <div className="absolute bottom-0 right-0  bg-white  rounded-full  ">
                <Image
                  src="/cam.svg"
                  alt="Camera Icon"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            <div>
              <h2 className="text-md font-light text-gray-800">Marrydoe</h2>
              <p className="text-sm text-gray-600">marry@gmail.com</p>
            </div>
          </div>

          <p className="text-gray-700 max-w-[337px] mt-[30px] text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            perferendis!
            <br className="hidden sm:block" />
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
