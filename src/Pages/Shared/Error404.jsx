// Error404.jsx
import React from "react";

const Error404 = () => {
  // optional: pass a onGoHome prop or use react-router navigate here
  const handleGoHome = () => {
    window.location.href = "/"; // change to your home route if needed
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full bg-white rounded-4xl border border-[#E1E5EB] shadow-sm flex flex-col items-center justify-center py-14 px-4">
        {/* Illustration */}
        {/* Replace the src with your own image path so it matches the design */}
        <img
          src="https://www.shutterstock.com/image-vector/construction-worker-powerfully-breaking-concrete-600nw-2663508609.jpg"
          alt="Error 404"
          className="w-[800] object-contain mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-[#111827] mb-6">
          Error 404
        </h1>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="px-8 py-2 rounded-full bg-[#A4D63B] text-[#111827] text-sm font-medium shadow hover:bg-[#98cc31] transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404;