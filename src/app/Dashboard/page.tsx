"use client";

import React from "react";
import { useState } from "react";
import { Icon } from "@/components/ui/evervault-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CirclePlus } from "lucide-react";
import axios from "axios";

export default function Dashboard() {
  const [dream, setDream] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    "I was flying through the clouds above a city...",
    "I saw my childhood home underwater with glowing fish...",
  ]);

  const handleSuggestionClick = (text: string) => {
    setDream(text);
  };

  const handleSubmit = async () => {
    try {
      if (!dream.trim()) return;
      setLoading(true);
      setSuggestions([]);
      setResponse("");
      const res = await fetch("/api/dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: dream }),
      });

      const data = await res.json();
      setResponse(data.reply);
      setLoading(false);


      const update = await axios.post("/api/data", {
        prompt: dream,
        response: data.reply
      });
      console.log(update.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
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
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.ctrlKey) {
                  e.preventDefault();
                  handleSubmit();
                }

                // Ctrl+Enter inserts newline manually
                if (e.key === "Enter" && e.ctrlKey) {
                  e.preventDefault();
                  const start = e.currentTarget.selectionStart;
                  const end = e.currentTarget.selectionEnd;
                  const updatedValue =
                    dream.substring(0, start) + "\n" + dream.substring(end);
                  setDream(updatedValue);

                  // move cursor after newline
                  setTimeout(() => {
                    e.currentTarget.selectionStart =
                      e.currentTarget.selectionEnd = start + 1;
                  }, 0);
                }
              }}
              placeholder="What did you see in your dream?"
              className="w-full resize-none bg-transparent outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm pr-8"
            />
            {/* Reset Icon Button */}
            {response && (
              <button
                className="absolute bottom-2 right-2 text-gray-500 hover:text-black dark:hover:text-white transition"
                onClick={() => {
                  setDream("");
                  setResponse("");
                  setSuggestions([
                    "I was flying through the clouds above a city...",
                    "I saw my childhood home underwater with glowing fish...",
                  ]);
                }}
              >
                <CirclePlus size={18} />
              </button>
            )}

            {/* Suggestions */}
            <div className="flex gap-2 flex-wrap">
              {suggestions.map((text, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(text)}
                  className="text-xs md:text-sm bg-white/20 dark:bg-black/30 text-black dark:text-white border border-black/10 dark:border-white/20 px-3 py-1 rounded-full hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                >
                  {text}
                </button>
              ))}
            </div>
            {loading ? (
              <div className="absolute bottom-2 right-2 w-5 h-5 border-2 border-t-transparent border-gray-500 dark:border-gray-300 rounded-full animate-spin" />
            ) : (
              ""
            )}
          </div>
          <button
            className="relative inline-flex h-10 w-[7rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={handleSubmit}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-regular text-white backdrop-blur-3xl">
              Generate
            </span>
          </button>
          {response && (
            <div className="relative mt-3 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 shadow-md backdrop-blur-sm transition-all ease-in-out duration-300 mb-5">
              <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-100 whitespace-pre-line">
                <TextGenerateEffect words={response} />
              </p>
            </div>
          )}
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex items-center justify-between w-full mt-4 gap-2 text-xs flex-wrap">
          <h2 className="text-black dark:text-white font-light">
            AI-generated, not professional advice.
          </h2>
          <p className="border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
            Built with ❤️ by Mohit Sen
          </p>
        </div>
      </div>
    </div>
  );
}
