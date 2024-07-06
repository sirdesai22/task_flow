import React from "react";

type Props = {};

const ProgressBar = (props: Props) => {
  const level = 3;
  const totalLevels = 5;
  const percentage = (level / totalLevels) * 100;
  return (
    <div className="w-full">
      <div className="bg-gray-500 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
