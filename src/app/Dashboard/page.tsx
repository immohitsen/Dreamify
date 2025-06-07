"use client";

import React from "react";
import { useState } from "react";
import { Icon } from "@/components/ui/evervault-card";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function Dashboard() {
  const [dream, setDream] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!dream.trim()) return;
    setLoading(true);
    setResponse("");
    const res = await fetch("/api/dream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: dream }),
    });
    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <div className="mx-5">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-2xl mx-auto p-4 relative min-h-[20rem] bg-white/10 dark:bg-black/20 backdrop-blur-sm shadow-md mt-15 mb-15">
        {/* Corner Icons */}
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        {/* Input Field Section */}
        <div className="mt-6 w-full flex flex-col gap-y-3">
          <label
            htmlFor="dream"
            className="text-sm text-black dark:text-white font-normal"
          >
            What&apos;s your dream?
          </label>
          <div className="relative rounded-lg border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-black px-3 py-2 shadow-inner">
            <textarea
              id="dream"
              rows={5}
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="Enter your dream here..."
              className="w-full resize-none bg-transparent outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm pr-8"
            />
            <ArrowRight
              className={`absolute bottom-2 right-2 w-5 h-5 transition-all cursor-pointer ${
                loading ? "animate-spin" : "hover:scale-125 hover:text-white"
              } text-gray-500 dark:text-gray-300`}
              onClick={!loading ? handleSubmit : undefined}
            />
          </div>
          {response && (
            <div className="mt-6 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 shadow-md backdrop-blur-sm transition-all ease-in-out duration-300 mb-5">
              <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-line">
                <TextGenerateEffect words={response} />
              </p>
            </div>
          )}
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Bottom content */}
        <h2 className="dark:text-white text-black text-sm font-light mb-2">
          Hover over this card to reveal an awesome effect.
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
          Watch me hover
        </p>
      </div>
    </div>
  );
}
