"use client";
import ProjectCard from "@/components/ProjectCard";
import { auth } from "@/config/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";

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
      <div className="p-3">
        <button onClick={userLogout}>Logout</button>
        <h1 className="text-7xl font-semibold my-4">Projects</h1>
        <div className="flex flex-col gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    );
  else return <h1>Please login</h1>;
};

export default MenntorDashboard;
