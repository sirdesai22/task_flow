import ProjectCard from "@/components/ProjectCard";
import React from "react";

type Props = {};

const MenntorDashboard = (props: Props) => {
  return (
    <div className="p-3">
      <h1 className="text-7xl font-semibold my-4">Your Projects</h1>
      <div className="flex flex-col gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default MenntorDashboard;
