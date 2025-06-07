import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import HomeButton from "@/components/ui/HomeButton";

export default function BackgroundLinesDemo() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full min-h-screen flex-col px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Dreamify, <br />{" "}
            <span className="block text-5xl bg-clip-text text-transparent font-bold ">
              Accurate Dream{" "}
              <span className="italic font-normal">Interpretation</span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Unlock the secrets of your dreams — guided by minds that see beyond
            the veil, absolutely free.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <HomeButton />
          </div>
        </div>
      </BackgroundLines>
    </>
  );
}
