"use client";

export default function HomeButton() {
  const handleclick = () => {
    window.location.href = "/Dashboard";
  };

  return (
    <button
      onClick={handleclick}
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-1 sm:p-1.5 text-sm sm:text-base font-normal leading-7 text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-1.5 sm:space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-4 sm:py-2 sm:px-6 ring-1 ring-white/10">
        <span>Get started</span>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:h-6 sm:w-6"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1rem] sm:left-[1.125rem] h-px w-[calc(100%-2rem)] sm:w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}
