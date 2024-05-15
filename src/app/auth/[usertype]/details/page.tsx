"use client";
import React, { useState } from "react";

type Props = {};

const GroupDetails = (props: Props) => {
  const [leader, setLeader] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [projectName, setProjectName] = useState("");
  const [mentor, setMentor] = useState("");

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 h-screen">
      <h1 className="text-7xl font-semibold">Fill in your team details</h1>
      <div className="w-[40vw]">
        <form className="flex flex-col p-10 gap-5 w-full text-xl">
          <input
            className="p-2 bg-transparent border-2 rounded-md"
            type="text"
            value={leader}
            onChange={(e) => {
              setLeader(e.target.value);
            }}
            placeholder="Enter leader name"
            required
          />

          <input
            className="p-2 bg-transparent border-2 rounded-md"
            type="text"
            value={member1}
            onChange={(e) => {
              setMember1(e.target.value);
            }}
            placeholder="Enter team member 1"
            required
          />

          <input
            className="p-2 bg-transparent border-2 rounded-md"
            type="text"
            value={member2}
            onChange={(e) => {
              setMember2(e.target.value);
            }}
            placeholder="Enter team member 2"
            required
          />

          <input
            className="p-2 bg-transparent border-2 rounded-md"
            type="text"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            placeholder="Enter project name"
            required
          />

          <select
            className="p-2 bg-transparent border-2 rounded-md"
            value={mentor}
            onChange={(e) => {
              setMentor(e.target.value);
            }}
            required
          >
            {/* Map all these according to mentorDB */}
            <option className="p-2 bg-slate-900 text-slate-700" value="none">
              Select your mentor
            </option>
            <option className="text-white p-2 bg-slate-900" value="anusha">
              Anusha
            </option>
            <option className="text-white p-2 bg-slate-900" value="tanvi">
              Tanvi
            </option>
            <option className="text-white p-2 bg-slate-900" value="shreya">
              Shreya
            </option>
            <option className="text-white p-2 bg-slate-900" value="mentor">
              Mentor
            </option>
          </select>

          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold"
            // onClick={handleSignup}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupDetails;
