"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { set } from "mongoose";

const MeowCard = ({ meow, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <div className="bg-white w-72 shadow-lg mx-auto rounded-xl p-4 flex flex-col justify-around">
        <p className="text-gray-600 text-center">
          <span className="text-lg font-bold text-purple-600">“</span>
          {meow?.meow}
          <span className="text-lg font-bold text-purple-600">”</span>
        </p>
        <div className="flex items-center mt-4">
          <a href="#" className="relative block">
            <Image
              src={meow.creator?.image}
              alt="Profile"
              width={32}
              height={32}
              className="mx-auto object-cover rounded-full h-10 w-10"
            />
          </a>
          <div className="flex flex-col justify-between ml-2">
            <span className="text-sm font-semibold text-purple-600">{meow.creator?.username}</span>
            <span className="flex items-center text-xs dark:text-gray-400">
              {meow.creator?.email}
              <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeowCard;
