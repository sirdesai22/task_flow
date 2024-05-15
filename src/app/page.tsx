'use client'
import { Vortex } from "@/components/ui/voxtex";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h1 className="text-white text-2xl md:text-9xl font-bold text-center animate-fade">
          TaskFlow
        </h1>

        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center animate-fade delay-1000">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] animate-fade delay-1000" onClick={()=>{window.location.href = '/auth'}}>
            Get started
          </button>
        </div>
      </Vortex>
    </div>
  );
}
