"use client";
import { useDBContext } from "@/components/globalDB-Context";
import { db } from "@/config/firebase.config";
import { levels } from "@/data/levels";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const LevelUp = (props: Props) => {
  const { projectId } = useParams();
  const [level, setLevel] = useState("");
  const [desc, setDesc] = useState("");
  const { projectsDB } = useDBContext();
  const [proLevel, setProLevel] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);


  const getProject = () => {
    const project = projectsDB.find((pro:any) => String(pro.id) === String(projectId));
    console.log(project)
    setProLevel(project?.level);
    console.log("asjdh  =  ",proLevel)
    setIsInitialized(true)
  };

  useEffect(() => {
    if (projectsDB.length > 0) {
      getProject();
    }
  }, [projectId, projectsDB]);

  const askLevelUp = async () => {
    const docRef = doc(db, "projectDB", projectId);
    const docSnap: any = await getDoc(docRef);
    let prevState = docSnap.data().requests; // Get the current state of the 'request' array

    if (!Array.isArray(prevState)) {
      prevState = []; // Initialize as an empty array if it's not already
    }

    const data = {
      requests: [
        ...prevState,
        {
          title: `Level up to ${level}`,
          desc: desc,
          approved: null,
          isRequest: false,
          reason: "",
        },
      ],
    };

    const team = await updateDoc(docRef, data);
    window.location.href = "/team/dashboard";
  };

  if (isInitialized)
    return (
      <div className="min-h-screen z-10 flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-semibold">🎖️Request level-up🎖️</h1>
        <form className="w-[40vw] flex flex-col justify-center items-center gap-3">
          <select
            className="p-2 bg-transparent border-2 rounded-md shadow-lg bg-white border-black w-full"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
            defaultValue={"none"}
            required
          >
            {/* Map all these according to mentorDB */}
            <option
              className="text-slate-700"
              // hidden
              value=""
              disabled={true}
            >
              Select level
            </option>

            {levels.slice(proLevel+1).map((m, index) => (
              <option key={index} className="" value={m}>
                {m}
              </option>
            ))}
          </select>

          <textarea
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black w-full"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            rows={12}
            placeholder="Enter your project progress..."
            required
          />
        </form>
        <button
          onClick={askLevelUp}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg font-semibold w-full"
        >
          Submit
        </button>
      </div>
    );
};

export default LevelUp;
