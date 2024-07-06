"use client";
import ProjectCard from "@/components/ProjectCard";
import { auth } from "@/config/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { ImSwitch } from "react-icons/im";

type Props = {};

const MenntorDashboard = (props: Props) => {
  // console.log(auth.currentUser)

  const userLogout = async () => {
    try {
      await signOut(auth);
      console.log(auth.currentUser?.email);
      console.log("ok done");
    } catch (error) {
      console.error(error);
    }
  };

  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
    }
  });

  if (user)
    return (
      <div className="w-full z-10 min-h-screen">
        <nav className="py-3 px-4 bg-black text-white font-semibold flex justify-between items-center">
          <p className="text-2xl">Welcome, {auth.currentUser?.email}</p>
          <button onClick={userLogout} className="bg-red-500 px-3 py-2 rounded-full flex items-center justify-center gap-2"><ImSwitch /> Logout</button>
        </nav>
        <div className="p-3">
          <h1 className="text-7xl font-semibold my-4">Projects</h1>
          <div className="flex flex-col gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    );
  else return <div className="h-screen text-9xl font-semibold flex justify-center items-center">Please login</div>;
};

export default MenntorDashboard;