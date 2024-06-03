import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-2">
      <h1 className="text-4xl my-3 font-bold">Project: Project Management System using Gamification</h1>
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
      <div className="flex justify-center items-center w-full">
        <div className="relative flex items-center justify-between mt-10 w-[80%]">

          <div className="absolute bg-white h-2 -z-10 w-full"></div>
          <div className="absolute bg-green-500 h-2 left-0 -z-10 w-[60%] rounded-r-full"></div>

          <div className="h-32 w-32 bg-stone-700 rounded-full"></div>
          <div className="h-32 w-32 bg-stone-700 rounded-full"></div>
          <div className="h-32 w-32 bg-stone-700 rounded-full"></div>
          <div className="h-32 w-32 bg-stone-700 rounded-full"></div>
          <div className="h-32 w-32 bg-stone-700 rounded-full"></div>
        </div>
      </div>

      {/* requests  */}
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-4xl font-semibold">Approval Requests:</h1>
        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">Approve</button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">Reject</button>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">Approve</button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">Reject</button>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">Approve</button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
