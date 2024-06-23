"use client";
import { auth, db } from "@/config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

type Props = {};

const UserTypeLogin = ({ params: { usertype } }: any) => {
  const [newUser, setNewUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  // teamInfo

  // mentorInfo
  const [mentorName,  setMentorName] = useState('');
  const mentorDBRef = collection(db, "mentorDB");

  const handleNewUser = () => {
    setNewUser(!newUser);
  };

  const handleTeamSignup = () => {
    window.location.href = "/auth/team/details";
  }

  const handleMentorSignup = async (e: any) => {
    e.preventDefault();
      // Signup your mentor
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Store all details of mentor 
        // name
        // email 
        // usertype
        try {
          await addDoc(mentorDBRef, {
            name: mentorName,
            email: email,
          });
        } catch (error) {
          console.log(error);
        }

        window.location.href = "/mentor/dashboard";
      } catch (error) {
        console.error(error);
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
                value={mentorName}
                onChange={(e) => setMentorName(e.target.value)}
                required
              />
            ) : (
              <></>
            )}
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="email"
              placeholder={`Enter ${
                usertype === "team" ? "team" : "your"
              } email`}
              value={email}
              onChange={(e) =>{setEmail(e.target.value);}}
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>{setPassword(e.target.value);}}
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md"
              type="password"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) =>{setConfirmPass(e.target.value);}}
              required
            />
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold"
              onClick={(usertype==='mentor')?handleMentorSignup:handleTeamSignup}
            >
              {usertype === "team" ? "Continue" : "Signup"}
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