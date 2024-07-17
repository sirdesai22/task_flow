"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { useDBContext } from "./globalDB-Context";

type Props = {
  project: {
    teamId: string;
    mentorId: string;
    projectName: string;
  };
};

const ProjectCard = (props: Props) => {
  const { teamDB } = useDBContext();
  const [team, setTeam] = useState<{ 
    id?: string;
    email?: string; 
    leader?: string; 
    member1?: string 
    member2?: string 
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamDetails = teamDB.find((t: { id: string }) => t.id == props.project.teamId);
        if (teamDetails) {
          setTeam(teamDetails);
        }
      } catch (error) {
        console.error('Error fetching team details:', error);
      }
    };

    fetchData();
  }, [props.project, teamDB]);

  const handleProjectInfo = () => {
    window.location.href = `/mentor/info/${team.id}`;
  };

  return (
    <div className="flex justify-between items-center w-full rounded-md bg-zinc-200 p-5 hover:bg-zinc-300 transition-all ease-in-out shadow-lg">
      <div>
        <p>{team.leader}</p>
        { team.member1?<p>{team.member1}</p>:<></> }
        { team.member2?<p>{team.member1}</p>:<></> }
      </div>
      <div className="w-1/2 text-center flex flex-col justify-center items-center gap-2">
        <p className="text-2xl font-semibold">{props.project.projectName}</p>
        <p className="text-4xl font-bold text-amber-400">Level: Gold</p>
        <ProgressBar />
      </div>

      <button
        onClick={handleProjectInfo}
        className="bg-green-500 p-4 font-semibold rounded-xl hover:bg-green-600"
      >
        Check progress
      </button>
    </div>
  );
};

export default ProjectCard;
