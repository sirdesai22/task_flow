import React from "react";

type Props = {
  name: string;
  email: string;
};

const UserCard = (props: Props) => {
  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-md flex justify-between items-center">
      <div>
        <p className="text-xl font-semibold">{props.name}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
