"use client";

import { db } from "@/config/firebase.config";
import { CollectionReference, DocumentData, collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const DBContext = createContext({
  mentorDB: [],
  teamDB: [],
  projectsDB: [],
  requestsDB: [],
});

export function DBProvider({ children }: { children: React.ReactNode }) {
  const [mentorDB, setMentorDB] = useState([]);
  const [teamDB, setTeamDB] = useState([]);
  const [projectsDB, setProjectsDB] = useState([]);
  const [requestsDB, setRequestsDB] = useState([]);

  const mentordbCollectionRef = collection(db, "mentorDB");
  const projectsdbCollectionRef = collection(db, "projectDB");
  const requestsdbCollectionRef = collection(db, "requestsDB");
  const teamsdbCollectionRef = collection(db, "teamDB");
  
  const getDataBases = async () => {
    try {
      //Mentor Database
      var data = await getDocs(mentordbCollectionRef);
      var filterData: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMentorDB(filterData);

      //Project Database
      var data = await getDocs(projectsdbCollectionRef);
      var filterData: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjectsDB(filterData);

      //Request Database
      var data = await getDocs(requestsdbCollectionRef);
      var filterData: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRequestsDB(filterData);

      //Team Database
      var data = await getDocs(teamsdbCollectionRef);
      var filterData: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTeamDB(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataBases();
  }, []);

  return (
    <DBContext.Provider value={{ mentorDB, teamDB, projectsDB, requestsDB }}>
      {children}
    </DBContext.Provider>
  );
}

export function useDBContext() {
  return useContext(DBContext);
}
