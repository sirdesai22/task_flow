"use client";
import { useDBContext } from "@/components/globalDB-Context";
import { levels } from "@/data/levels";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const { projectId } = useParams();
  console.log(projectId);

  const { teamDB } = useDBContext();
  const [team, setTeam] = useState<{
    id?: string;
    email?: string;
    leader?: string;
    member1?: string;
    member2?: string;
    projectName?: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamDetails = teamDB.find(
          (t: { id: string }) => t.id === projectId
        );
        if (teamDetails) {
          setTeam(teamDetails);
        }
      } catch (error) {
        console.error("Error fetching team details:", error);
      }
    };

    fetchData();
  }, [projectId, teamDB]);
  return (
    <div className="p-2 z-10 w-full">
      <h1 className="text-4xl my-3 font-bold">
        Project: {team.projectName}
      </h1>
      <div className="w-full p-3 rounded-md bg-gray-300">
        
        <div className="flex justify-between text-3xl w-full">
          <h1 className="w-1/3">{team.leader}</h1>
          <p className="w-1/3">U15BH21S0158</p>
          <p className="">member@gmail.com</p>
        </div>
        {team.member1 ? (
          <div className="flex justify-between text-3xl w-full">
            <h1 className="w-1/3">{team.member1}</h1>
            <p className="w-1/3">U15BH21S0158</p>
            <p className="">member@gmail.com</p>
          </div>
        ) : (
          <></>
        )}

        {team.member2 ? (
          <div className="flex justify-between text-3xl w-full">
            <h1 className="w-1/3">{team.member2}</h1>
            <p className="w-1/3">U15BH21S0158</p>
            <p className="">member@gmail.com</p>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-center items-center w-full mb-24">
        <div className="relative flex items-center justify-between mt-10 w-[80%]">
          {/* <div className="absolute bg-white h-2 -z-10 w-full"></div> */}
          {/* <div className="absolute bg-green-500 h-2 left-0 -z-10 w-[50%] rounded-r-full"></div> */}

          {levels.map((level, index) => (
            <div key={index} className="h-32 w-32 text-center">
              <Image
                src={`/levels/level${index + 1}.png`}
                width={500}
                height={500}
                alt="Picture of the author"
                className="hover:scale-105 transition-all ease-in-out"
              />
              {/* <img
                src={`/levels/level${index + 1}.png`}
                className={`-mt-3 ${index > 2 ? "grayscale" : ""}`}
                alt="level"
              /> */}
              <p className="text-xl font-semibold">{level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* requests  */}
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-4xl font-semibold">Approval Requests:</h1>
        <div className="flex justify-between items-center p-5 bg-gray-300 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Approve
            </button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Reject
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-300 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Approve
            </button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Reject
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-gray-300 rounded-lg">
          <h2 className="text-x">Your request title</h2>
          <div className="flex gap-5">
            <button className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Approve
            </button>
            <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
