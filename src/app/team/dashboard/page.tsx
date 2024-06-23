import { levels } from "@/data/levels";
import Image from "next/image";
import React from "react";

type Props = {};

const TeamDashboard = (props: Props) => {
  // const levels = ['Requirements', 'Design', 'Development', 'Testing', 'Delpoyment'];

  return (
    <div className="p-2">
      <h1 className="text-5xl my-3 font-bold text-center">
        Project Management System using Gamification
      </h1>
      <div className="w-full p-3 rounded-md bg-gray-800">
        <div className="flex justify-between text-3xl">
          <h1>Member name</h1>
          <p>U15BH21S0158</p>
          <p>member@gmail.com</p>
        </div>
        <div className="flex justify-between text-3xl">
          <h1>Member name</h1>
          <p>U15BH21S0158</p>
          <p>member@gmail.com</p>
        </div>
        <div className="flex justify-between text-3xl">
          <h1>Member name</h1>
          <p>U15BH21S0158</p>
          <p>member@gmail.com</p>
        </div>
      </div>

      {/* progress circles */}
      <div className="flex justify-center items-center w-full mb-24">
        <div className="relative flex items-center justify-between mt-10 w-[80%]">
          {/* <div className="absolute bg-white h-2 -z-10 w-full"></div> */}
          {/* <div className="absolute bg-green-500 h-2 left-0 -z-10 w-[50%] rounded-r-full"></div> */}

          {levels.map((level, index) => (
            <div key={index} className="h-32 w-32 text-center">
              <Image
                src={`/levels/level${index + 1}.png`}
                width={500}
                height={500}
                alt="Picture of the author"
                className="hover:scale-105 transition-all ease-in-out"
              />
              {/* <img
                src={`/levels/level${index + 1}.png`}
                className={`-mt-3 ${index > 2 ? "grayscale" : ""}`}
                alt="level"
              /> */}
              <p className="text-xl font-semibold">{level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* requests  */}
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">Your Requests:</h1>
          <div className="flex gap-5">
            <button className="bg-blue-500 w-[10rem] py-2 rounded-md text-white font-semibold">
              Request approval
            </button>
            <button className="bg-amber-500 w-[10rem] py-2 rounded-md text-white font-semibold">
              Request Level up!
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-lg">
          <h2 className="text-x">Added authentication using Google</h2>
          <div className="flex gap-5">
            <p className="text-xl font-semibold text-green-500">Approved</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-lg">
          <h2 className="text-x">Implemented user dashboard</h2>
          <div className="flex gap-5">
            <p className="text-xl font-semibold text-red-500">Rejected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;
