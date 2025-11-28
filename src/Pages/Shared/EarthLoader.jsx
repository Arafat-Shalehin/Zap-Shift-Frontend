// EarthLoader.jsx
import React from "react";

export default function EarthLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-28 h-28">
        {/* Spinning earth */}
        <div className="w-full h-full text-rose-500 animate-[spin_7s_linear_infinite]">
          <svg
            viewBox="0 0 80 80"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Outer globe */}
            <circle cx="40" cy="40" r="30" fill="currentColor" />

            {/* Continents – rough shapes */}
            <path
              d="
                M 32 18
                C 26 20, 22 25, 22 30
                C 22 35, 25 37, 27 40
                C 29 43, 29 45, 29 48
                C 29 51, 28 53, 28 55
                C 28 57, 30 59, 32 60
                C 35 61, 37 60, 39 58
                C 40 56, 40 54, 40 51
                C 40 48, 39 46, 38 44
                C 36 40, 35 39, 34 37
                C 33 35, 33 34, 33 32
                C 33 29, 35 27, 37 25
                C 39 23, 38 20, 37 19
                C 36 18, 34 17, 32 18
                Z
              "
              fill="white"
            />
            <path
              d="
                M 46 22
                C 49 21, 53 22, 56 24
                C 59 26, 61 30, 61 34
                C 61 37, 59 39, 58 40
                C 57 41, 56 42, 56 44
                C 56 46, 57 48, 58 50
                C 59 52, 59 54, 58 56
                C 56 58, 53 59, 50 58
                C 48 57, 47 55, 47 53
                C 47 51, 48 49, 49 47
                C 50 45, 51 43, 51 41
                C 51 39, 49 37, 47 36
                C 45 35, 44 33, 44 31
                C 44 28, 44 24, 46 22
                Z
              "
              fill="white"
            />
          </svg>
        </div>

        {/* Orbiting plane */}
        <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
          {/* Plane starts above the globe and the whole wrapper spins */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-rose-500 fill-current"
              aria-hidden="true"
            >
              <path
                d="
                  M 2 11
                  L 11 13
                  L 20 7
                  L 21.5 9
                  L 14 14
                  L 21.5 17
                  L 20 19
                  L 11 15
                  L 2 17
                  L 3.5 14
                  L 9 13
                  L 3.5 12
                  Z
                "
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}