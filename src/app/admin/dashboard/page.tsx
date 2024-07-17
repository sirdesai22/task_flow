"use client";
import { useDBContext } from "@/components/globalDB-Context";
import TeamCard from "@/components/TeamCard";
import MentorCard from "@/components/MentorCard";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const { mentorDB, teamDB } = useDBContext();
  return (
    <div className="min-h-screen z-10 w-full p-3">
      <h1 className="text-5xl font-semibold">Welcome Admin</h1>
      <div className="flex justify-evenly w-full gap-10 px-5 mt-5">
        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex justify-between items-center mb-5">
            <p className="text-3xl font-semibold">Registered Mentors</p>
            <button className="px-4 py-2 bg-green-500 font-semibold rounded-full text-white">
              Create mentor
            </button>
          </div>
          {mentorDB.map((m:{name:string, email:string}, index) => (
            <MentorCard name={m.name} email={m.email} key={index} />
          ))}
        </div>

        <div className="w-1/2 flex flex-col gap-3">
          <p className="text-3xl font-semibold mb-6">Registered Teams</p>
          {teamDB.map((t:{email:string, leader:string, member1:string, member2:string}, index) => (
            <TeamCard
              key={index}
              email={t.email}
              leader={t.leader}
              member1={t.member1}
              member2={t.member2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
