"use client";
import React, { useState } from "react";

type Props = {};

const AdminLogin = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = () => {
    if(email === 'admin@gmail.com' && password === 'admin')
      window.location.href = '/admin/dashboard';
    else
      alert('Wrong credentials!');
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 h-screen z-10">
      <h1 className="text-7xl font-semibold">Login as Admin</h1>
      <div className="w-[40vw]">
        <div className="flex flex-col p-10 gap-5 w-full text-xl">
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            required
          />
          <input
            className="p-2 bg-transparent border-2 rounded-md bg-white shadow-lg border-black"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            required
          />
          <button
            onClick={handleAdminLogin}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
