"use client";
import React, { useState } from "react";

type Props = {};

const UserTypeLogin = ({ params: { usertype } }: any) => {
  const [newUser, setNewUser] = useState(true);

  // groupInfo


  // mentorInfo

  const handleNewUser = () => {
    setNewUser(!newUser);
  };

  const handleSignup = async(e:any) => {
    e.preventDefault();
    if(usertype==='team'){
      window.location.href = '/auth/team/details';
    }
    else{
      // Signup your mentor
    }
  };

  if (newUser)
    // Signup form
    return (
      <div className="w-full flex flex-col items-center justify-center gap-8 h-screen">
        <h1 className="text-7xl font-semibold">Signup as {usertype}</h1>
        <div className="w-[40vw]">
          <form className="flex flex-col p-10 gap-5 w-full text-xl">
            {usertype === "mentor" ? (
              <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="text"
              placeholder="Enter your name"
              required
            />
            ) : <></>}
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="email"
              placeholder={`Enter ${usertype==='team'? "team" : "your"} email`}
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="password"
              placeholder="Enter your password"
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="password"
              placeholder="Confirm your password"
              required
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold" onClick={handleSignup}>
              {(usertype==='team')?"Continue":"Signup"}
            </button>
            <p
              className="text-center text-base text-blue-500 underline cursor-pointer"
              onClick={handleNewUser}
            >
              Already registered? Login
            </p>
          </form>
        </div>
      </div>
    );
  // Login form
  else
    return (
      <div className="w-full flex flex-col items-center justify-center gap-10 h-screen">
        <h1 className="text-7xl font-semibold">Login as {usertype}</h1>
        <div className="w-[40vw]">
          <form className="flex flex-col p-10 gap-5 w-full text-xl">
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="password"
              placeholder="Enter your password"
              required
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold">
              Login
            </button>
            <p
              className="text-center text-base text-blue-500 underline cursor-pointer"
              onClick={handleNewUser}
            >
              Not registered yet? Signup
            </p>
          </form>
        </div>
      </div>
    );
};

export default UserTypeLogin;
