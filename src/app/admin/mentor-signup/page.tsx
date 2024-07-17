"use client";
import { auth, db } from "@/config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

type Props = {};

const MentorSignup = (props: Props) => {
  const [mentorName, setMentorName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const mentorDBRef = collection(db, "mentorDB");

  const handleMentorSignup = async (e: any) => {
    e.preventDefault();
    // Signup your mentor
    try {
      if (password !== confirmPass) {
        alert("Please check your password");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        // Store all details of mentor
        // name
        // email
        // usertype
        try {
          await addDoc(mentorDBRef, {
            name: mentorName,
            email: email,
            usertype: "mentor",
          });
        } catch (error) {
          console.log(error);
        }

        window.location.href = "/mentor/dashboard";
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 h-screen z-10">
      <h1 className="text-7xl font-semibold">Signup a mentor</h1>
      <div className="w-[50vw]">
        <div className="flex flex-col p-10 gap-5 w-full text-xl">
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="text"
            placeholder="Enter mentor name"
            value={mentorName}
            onChange={(e) => setMentorName(e.target.value)}
            required
          />

          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="email"
            placeholder="Enter mentor email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            required
          />

          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white  font-semibold shadow-lg"
            onClick={handleMentorSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorSignup;
