"use client";
import { useDBContext } from "@/components/globalDB-Context";
import { auth, db } from "@/config/firebase.config";
import { levels } from "@/data/levels";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

type Team = {
  id: string;
  email: string;
  leader: string;
  member1: string;
  member2: string;
  projectName: string;
};

type Project = {
  id: string;
  mentorId: string;
  teamId: string;
  projectName: string;
  request: [];
};

const TeamDashboard = (props: Props) => {
  // const levels = ['Requirements', 'Design', 'Development', 'Testing', 'Delpoyment'];
  const { teamDB, projectsDB } = useDBContext();
  const [teamData, setTeamData] = useState<Team>();
  const [project, setProject] = useState<Project>();
  const [teamMembers, setTeamMembers] = useState<String[]>();
  const teamEmail = auth?.currentUser?.email;
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (teamDB && teamEmail) {
      const data = teamDB.find(
        (team: { email: string }) => team.email === teamEmail
      );
      setTeamData(data);
    }
  }, [teamDB, teamEmail]);

  useEffect(() => {
    if (teamData) {
      const pro: any = projectsDB.find(
        (project: { teamId: string }) => project.teamId === teamData.id
      );
      setProject(pro);
      setRequests(pro.requests)
      const members = [teamData.leader, teamData.member1, teamData.member2];
      console.log(teamData);
      setTeamMembers(members);
    }
  }, [teamData, projectsDB]);

  return (
    <div className="p-2 w-full z-10 min-h-screen">
      <h1 className="text-5xl my-3 font-bold text-center">
        {teamData ? teamData.projectName : "Dummy Project Name"}
      </h1>

      <div className="w-full p-3 rounded-md bg-gray-300">
        <div className="flex justify-between text-3xl">
          <h1 className="w-1/3">{teamData?.leader}</h1>
          <p className="w-1/3">U15BH21S0158</p>
          <p>member@gmail.com</p>
        </div>

        {teamData?.member1 ? (
          <div className="flex justify-between text-3xl">
            <h1 className="w-1/3">{teamData?.member1}</h1>
            <p className="w-1/3">U15BH21S0158</p>
            <p>member@gmail.com</p>
          </div>
        ) : (
          <></>
        )}

        {teamData?.member2 ? (
          <div className="flex justify-between text-3xl">
            <h1 className="w-1/3">{teamData?.member2}</h1>
            <p className="w-1/3">U15BH21S0158</p>
            <p>member@gmail.com</p>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* progress circles */}
      <div className="flex justify-center items-center w-full mb-24">
        <div className="relative flex items-center justify-between mt-10 w-[80%]">
          {/* <div className="absolute bg-white h-2 -z-10 w-full"></div> */}
          {/* <div className="absolute bg-green-500 h-2 left-0 -z-10 w-[50%] rounded-r-full"></div> */}

          {levels.map((level, index) => (
            <div key={index} className="h-32 w-32 text-center">
              {/* <Image
                src={`/levels/level${index + 1}.png`}
                width={500}
                height={500}
                alt="Picture of the author"
                className="hover:scale-105 transition-all ease-in-out"
              /> */}
              <img
                src={`/levels/level${index + 1}.png`}
                className={`-mt-3 ${index > project.level ? "grayscale" : ""}`}
                alt="level"
              />
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
            <button
              className="bg-blue-500 w-[10rem] py-2 rounded-md text-white font-semibold"
              onClick={() =>
                (window.location.href = `/team/request/${String(project.id)}`)
              }
            >
              Add progress
            </button>
            <button
              className="bg-amber-500 w-[10rem] py-2 rounded-md text-white font-semibold"
              onClick={() => (window.location.href = "/team/level-up")}
            >
              Request Level up!
            </button>
          </div>
        </div>

        {requests.map((req:{title:string, desc:string, approved:boolean}, index) => (
          <div key={index} className="flex justify-between items-center p-5 bg-gray-300 rounded-lg">
            <h2 className="text-x">{req.title}</h2>
            <div className="flex gap-5">
              <p className={`text-xl font-semibold ${req.approved===null?"text-gray-500":req.approved?"text-green-500":"text-red-500"}`}>
              {req.approved===null?"Pending":req.approved?"Approved":"Rejected"}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default TeamDashboard;
