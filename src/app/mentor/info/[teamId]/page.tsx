"use client";
import { useDBContext } from "@/components/globalDB-Context";
import { db } from "@/config/firebase.config";
import { levels } from "@/data/levels";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

type Props = {};

// type Project = {
//   id: string;
//   mentorId: string;
//   teamId: string;
//   level: number;
//   projectName: string;
//   requests: [];
// };

type Project = {
  id: string;
  mentorId: string;
  teamId: string;
  level: number;
  projectName: string;
  requests: Array<{
    id: string;
    title: string;
    desc: string;
    approved: boolean | null;
    reason: string;
    isRequest: boolean;
  }>;
};

const page = (props: Props) => {
  const { teamId } = useParams();
  console.log("team id = ", teamId);
  const [project, setProject] = useState<Project>();
  const [reason, setReason] = useState("");

  const { teamDB, projectsDB } = useDBContext();
  const [team, setTeam] = useState<{
    id?: string;
    email?: string;
    leader?: string;
    member1?: string;
    member2?: string;
    projectName?: string;
  }>({});

  let closePopup;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamDetails = teamDB.find(
          (t: { id: any }) => String(t.id) === String(teamId)
        );
        const pro: any = projectsDB.find(
          (p: { teamId: string }) => p.teamId == teamId
        );
        setProject(pro);
        if (teamDetails) {
          setTeam(teamDetails);
        }
      } catch (error) {
        console.error("Error fetching team details:", error);
      }
    };

    fetchData();
  }, [teamId, teamDB]);

  useEffect(() => {
    if (!teamId) return;
  
    const docRef = doc(db, "projectDB", teamId);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const projectData = doc.data() as Project;
        console.log("Real-time project data:", projectData);
        setProject(projectData);
      }
    });
  
    return () => unsubscribe();
  }, [teamId]);

  const handleAccept = async (reqIndex: number) => {
    console.log(reqIndex);
    try {
      if (!project || !project.id) {
        console.error("Project or project ID is undefined");
        return;
      }
  
      const docRef = doc(db, "projectDB", project.id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        console.error("No such document!");
        return;
      }
  
      const currentData = docSnap.data() as Project;
      const prevRequests = currentData.requests || [];
      let newLevel = currentData.level;
  
      const updatedRequests = prevRequests.map((request, index) => {
        if (index == reqIndex) {
          if (request.isRequest === false) {
            newLevel += 1; // Increment the level for level-up requests
          }
          return { ...request, approved: true };
        }
        return request;
      });
  
      const updatedData: Partial<Project> = {
        requests: updatedRequests,
        level: newLevel
      };
  
      await updateDoc(docRef, updatedData);
  
      // Update local state
      setProject(prevProject => {
        if (!prevProject) return prevProject;
        return {
          ...prevProject,
          requests: updatedRequests,
          level: newLevel
        };
      });
  
      console.log("Document updated successfully. New level:", newLevel);
  
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // const handleAccept = async(reqIndex: number) => {
  //   console.log(reqIndex);
  //   const docRef = doc(db, "projectDB", project?.id);
  //   const docSnap:any = await getDoc(docRef);
  //   let prevState = docSnap.data().requests; // Get the current state of the 'request' array
  //   // if (!Array.isArray(prevState)) {
  //     //   prevState = []; // Initialize as an empty array if it's not already
  //     // }
  //     let currLevel = project?.level
  //     let isLevelChanged = false;
  //     let currReq = project?.requests[reqIndex];
  //     console.log(currReq?.isRequest)
  //   if(currReq?.isRequest === false) {
  //     isLevelChanged = true;
  //     currLevel += 1 
  //   }

  //   const updatedRequests = prevState.map((request, index) => {
  //     if (index === reqIndex) {
  //       let updatedRequest = { ...request, approved: true };
  //       // if (isLevelChanged) {
  //       //   currLevel += 1
  //       // }
  //       return updatedRequest;
  //     }
  //     return request;
  //   });
  
  //   const data = {
  //     requests: updatedRequests,
  //     level: currLevel
  //   };
  //   const team = await updateDoc(docRef, data);
  //   console.log(team);
  //   window.location.reload();
  // };

  const handleReject = async(reqIndex: number) => {
    console.log(reqIndex);
    const docRef = doc(db, "projectDB", project?.id);
    const docSnap:any = await getDoc(docRef);
    let prevState = docSnap.data().requests; // Get the current state of the 'request' array

    // if (!Array.isArray(prevState)) {
    //   prevState = []; // Initialize as an empty array if it's not already
    // }

    const updatedRequests = prevState.map((request:any, index:any) => 
      index === reqIndex ? { ...request, approved: false, reason: reason } : request
    );
  
    const data = {
      requests: updatedRequests
    };
    const team = await updateDoc(docRef, data);
    console.log(team);
    window.location.reload();
  };

  return (
    <div className="p-2 z-10 w-full min-h-screen">
      <h1 className="text-4xl my-3 font-bold">Project: {team.projectName}</h1>
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
              {/* <Image
                src={`/levels/level${index + 1}.png`}
                width={500}
                height={500}
                alt="Picture of the author"
                className="hover:scale-105 transition-all ease-in-out"
              /> */}
              <img
                src={`/levels/level${index + 1}.png`}
                className={`-mt-3 ${index > project?.level ? "grayscale" : ""}`}
                alt="level"
              />
              <p className="text-xl font-semibold">{level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* requests  */}
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="text-4xl font-semibold">Approval Requests:</h1>

        {[...(project?.requests || [])].map(
          (
            req,
            index
          ) => (
            <div
              key={index}
              className={`flex justify-between items-center p-5 ${req.isRequest?"bg-gray-300":"bg-amber-300"} rounded-lg`}
            >
              <div>
                <h2 className="text-xl font-semibold">{req.title}</h2>
                <p>Description: {req.desc}</p>
                <p>{(req.reason !== "")? `Reason: ${req.reason}`:""}</p>
              </div>
              {req.approved === null ? (
                <div className="flex gap-5">
                  <button
                    onClick={() => handleAccept(index)}
                    className="bg-green-500 w-[7rem] py-2 rounded-md text-white font-semibold"
                  >
                    {req.isRequest?"Aprove":"Allow level-up!"}
                  </button>
                  <Popup
                    className="fixed inset-0 flex justify-center items-center"
                    trigger={
                      <button className="bg-red-500 w-[7rem] py-2 rounded-md text-white font-semibold">
                        {req.isRequest?"Reject":"Deny level-up!"}
                      </button>
                    }
                    position="center center"
                    modal
                    // closeOnDocumentClick={false} // To prevent closing on document click
                    ref={(ref: any) => (closePopup = ref && ref.close)}
                  >
                    <div className="bg-none border-slate-300 border-2 backdrop-blur-xl flex flex-col justify-center items-center text-black shadow-lg rounded-md p-5">
                      {/* bg-gradient-to-br from-[#292929] to-[#252525] */}
                      <input
                        className="text-xl p-2"
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Reason your rejection..."
                      />

                      <button
                        onClick={() => handleReject(index)}
                        className="rounded-md px-3 py-2 mt-4 w-1/2 text-xl bg-red-500 text-white font-semibold hover:bg-red-600 hover:text-black duration-700"
                      >
                        {req.isRequest?"Reject":"Deny level-up!"}
                      </button>
                    </div>
                  </Popup>
                </div>
              ) : (
                <p
                  className={`text-xl font-semibold ${
                    req.approved === null
                      ? "text-gray-500"
                      : req.approved
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {req.approved === null
                    ? "Pending"
                    : req.approved
                    ? "Approved"
                    : "Rejected"}
                </p>
              )}
            </div>
          )
        )}

        {/* <div className="flex justify-between items-center p-5 bg-gray-300 rounded-lg">
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
        </div> */}
      </div>
    </div>
  );
};

export default page;
