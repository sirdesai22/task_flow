'use client'
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full h-screen bg-black justify-center items-center flex-col" style={{background: 'url(/black_noise.jpg)', backgroundRepeat: 'no-repeat'}}>
      <h1 className="text-8xl font-semibold">Login as</h1>

      <div className="flex w-full justify-evenly items-center">
        <div className="text-6xl font-semibold flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all" onClick={() => {window.location.href = "/auth/mentor"}}>
          <img src="/mentor.webp" alt="" className="h-[50vh]" />
          Mentor
        </div>

        <div className="text-6xl font-semibold flex justify-center items-center flex-col cursor-pointer hover:scale-110 transition-all" onClick={() => {window.location.href = "/auth/team"}}>
          <img src="/group_img.png" alt="" className="h-[50vh]" />
          Team
        </div>
      </div>
    </div>
  );
};

export default page;
