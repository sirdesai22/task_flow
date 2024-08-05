'use client'
import React from "react";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col z-10">
      <h1 className="text-8xl font-semibold">Login as</h1>

      <div className="flex w-full justify-evenly items-center">
        <div className="text-6xl font-semibold flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all" onClick={() => {window.location.href = "/auth/mentor-login"}}>
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

export default Auth;
