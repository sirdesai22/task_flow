import React from "react";

type Props = {
  id: string;
  email: string;
  leader: string;
  member1: string;
  member2: string;
  mentor: string;
};

const TeamCard = (props: Props) => {
  return (
    <div /*onClick={()=>{window.location.href = `/mentor/info/${props.id}`}}*/ className="bg-blue-100 p-4 rounded-md shadow-md flex justify-between items-center">
      <div className="w-full flex flex-col justify-center gap-2">
        <p className="text-xl">
          Team email: <span className="font-semibold">{props.email}</span>
        </p>
        <p className="text-base">
          Mentor: <span className="font-semibold">{props.mentor}</span>
        </p>
        <div className="flex">
          <p className="w-1/3">{props.leader} (Leader)</p>
          <p className="w-1/3">UUCMS NUMBER</p>
          <p className="w-1/3">BCA ROLL NUMBER</p>
        </div>

        {props.member1 ? (
          <div className="flex">
            <p className="w-1/3">{props.member1}</p>
            <p className="w-1/3">UUCMS NUMBER</p>
            <p className="w-1/3">BCA ROLL NUMBER</p>
          </div>
        ) : (
          <></>
        )}

        {props.member2 ? (
          <div className="flex">
            <p className="w-1/3">{props.member2}</p>
            <p className="w-1/3">UUCMS NUMBER</p>
            <p className="w-1/3">BCA ROLL NUMBER</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
