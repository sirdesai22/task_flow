"use client";
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen z-10">
      <button
        className="absolute -top-2 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg mt-5 animate-fade"
        onClick={() => {
          window.location.href = "/admin";
        }}
      >
        Admin
      </button>    
      <h1 className="py-5 bg-gradient-to-b from-blue-500 to-indigo-500 text-transparent bg-clip-text text-2xl md:text-9xl font-extrabold text-center animate-fade">
        Project Pulse
      </h1>

      <p className="text-blue-500 font-semibold text-sm md:text-3xl max-w-xl text-center animate-fade delay-1000">
      Simplify, Organise, Achieve <br />
      {/* Streamline Your Project Journey */}
      </p>
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-lg mt-5 animate-fade"
        onClick={() => {
          window.location.href = "/auth";
        }}
      >
        Get started
      </button>
    </div>
  );
}
