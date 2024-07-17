"use client";
import { levels } from "@/data/levels";
import React, { useState } from "react";

type Props = {};

const LevelUp = (props: Props) => {
  const [level, setLevel] = useState("");
  const [desc, setDesc] = useState("");
  const submitProgress = () => {};
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

          {levels.map((m, index) => (
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
        onClick={submitProgress}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg font-semibold w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default LevelUp;
