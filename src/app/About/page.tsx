"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function About() {
  return (
    <>
      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer
          title="mohit.thelogicgen.com"
          href="https://mohit.thelogicgen.com"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold   text-base text-slate-100">
              Mohit Sen
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                You debug me, I just might commit.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <img
                src="./mohit.jpg" // replace with your image path or URL
                alt="Mohit looking legendary"
                className="object-cover w-full h-full"
              />
            </div>{" "}
          </div>
        </PinContainer>
      </div>
    </>
  );
}
