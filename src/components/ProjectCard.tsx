"use client";
import React from "react";
import ProgressBar from "./ProgressBar";

type Props = {};

const ProjectCard = (props: Props) => {
  const handleProjectInfo = () => {
    window.location.href = '/mentor/info/proname'
  };
  return (
    <div className="flex justify-between items-center w-full rounded-md bg-zinc-800 p-5">
      <div>
        <p>Team member name</p>
        <p>Team member name</p>
        <p>Team member name</p>
      </div>
      <div className="w-1/2 text-center flex flex-col justify-center items-center gap-2">
        <p className="text-4xl font-bold text-amber-400">Level: Gold</p>
        <ProgressBar />
      </div>

      <button
        onClick={handleProjectInfo}
        className="bg-green-600 p-4 font-semibold rounded-xl hover:bg-green-700"
      >
        Check progress
      </button>
    </div>
  );
};

export default ProjectCard;
