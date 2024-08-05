"use client";
import { useDBContext } from "@/components/globalDB-Context";
import ProjectCard from "@/components/ProjectCard";
import { auth } from "@/config/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ImSwitch } from "react-icons/im";

type Props = {};

const MenntorDashboard = (props: Props) => {
  // console.log(auth.currentUser)
  const { projectsDB, mentorDB } = useDBContext();
  const [mentor, setMentor] = useState<{ id: string }>({ id: "" });
  const [mentorProjects, setMentorProjects] = useState('');

  useEffect(() => {
    const findMentor: any = mentorDB.find(
      (mentor: { email: string }) => mentor.email === auth?.currentUser?.email
    );
    console.log(findMentor);
    setMentor(findMentor);
  }, [mentorDB]);

  useEffect(() => {
    if (mentorDB.id !== "") {
      const projects: any = projectsDB.filter(
        (project: { mentorId: string }) => project.mentorId == mentor.id
      );
      setMentorProjects(projects);
    }
  }, [mentor, projectsDB]);

  const userLogout = async () => {
    try {
      await signOut(auth);
      console.log(auth.currentUser?.email);
      console.log("ok done");
      window.location.href = "/auth/mentor-login";
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
          <button
            onClick={userLogout}
            className="bg-red-500 px-3 py-2 rounded-full flex items-center justify-center gap-2"
          >
            <ImSwitch /> Logout
          </button>
        </nav>
        <div className="p-3">
          <h1 className="text-7xl font-semibold my-4">Projects</h1>
          <div className="flex flex-col gap-4">
            {mentorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
              // projectName={p.projectName} leader={p.leader} member1={p.member1} member2={p.member2}
            ))}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="h-screen text-9xl font-semibold flex justify-center items-center">
        Please login
      </div>
    );
};

export default MenntorDashboard;
