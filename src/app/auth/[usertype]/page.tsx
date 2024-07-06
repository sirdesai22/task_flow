"use client";
import { auth, db } from "@/config/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

  const handleUserLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = `/${usertype}/dashboard`
    } catch (error) {
      alert(error);
    }
  };

  if (newUser)
    // Signup form
    return (
      <div className="w-full flex flex-col items-center justify-center gap-8 h-screen z-10">
        <h1 className="text-7xl font-semibold">Signup as {usertype}</h1>
        <div className="w-[40vw]">
          <div className="flex flex-col p-10 gap-5 w-full text-xl">
            {usertype === "mentor" ? (
              <input
                className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
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
              className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
              type="email"
              placeholder={`Enter ${
                usertype === "team" ? "team" : "your"
              } email`}
              value={email}
              onChange={(e) =>{setEmail(e.target.value);}}
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>{setPassword(e.target.value);}}
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
              type="password"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) =>{setConfirmPass(e.target.value);}}
              required
            />
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white  font-semibold shadow-lg"
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
          </div>
        </div>
      </div>
    );
  // Login form




  else
    return (
      <div className="w-full flex flex-col items-center justify-center gap-10 h-screen z-10">
        <h1 className="text-7xl font-semibold">Login as {usertype}</h1>
        <div className="w-[40vw]">
          <div className="flex flex-col p-10 gap-5 w-full text-xl">
            <input
              className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
              type="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value);}}
              placeholder="Enter your email"
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
              type="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value);}}
              placeholder="Enter your password"
              required
            />
            <button onClick={handleUserLogin} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg font-semibold">
              Login
            </button>
            <p
              className="text-center text-base text-blue-500 underline cursor-pointer"
              onClick={handleNewUser}
            >
              Not registered yet? Signup
            </p>
          </div>
        </div>
      </div>
    );
};

export default UserTypeLogin;