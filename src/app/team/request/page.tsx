"use client";
import React, { useState } from "react";

type Props = {};

const RequestForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitProgress = () => {};
  return (
    <div className="min-h-screen z-10 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-semibold">Journal your progress📝</h1>
      <form className="w-[40vw] flex flex-col justify-center items-center gap-3">
        <input
          className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black w-full"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter progress title"
          required
        />
        <textarea
          className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black w-full"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          rows={12}
          placeholder="Enter progress description"
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

export default RequestForm;
