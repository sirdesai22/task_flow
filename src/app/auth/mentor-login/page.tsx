"use client";
// import { useDBContext } from "@/components/globalDB-Context";
import { auth } from "@/config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

type Props = {};

const MentorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMentorLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/mentor/dashboard";
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 h-screen z-10">
      <h1 className="text-7xl font-semibold">Login as Mentor</h1>
      <div className="w-[40vw]">
        <div className="flex flex-col p-10 gap-5 w-full text-xl">
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            required
          />
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            required
          />
          <button
            onClick={handleMentorLogin}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorLogin;
