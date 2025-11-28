// Rider.jsx
import React from "react";
import bearider from "../../assets/agent-pending.png";

const Rider = () => {
  return (
    <div className="flex items-center justify-center md:py-10 py-5">
      <div
        className="w-full rounded-4xl bg-white border 
      border-gray-200 shadow-sm px-6 py-8 md:px-12 
      md:py-10"
      >
        {/* Top text */}
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold text-secondary">
            Be a Rider
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </header>

        <hr className="mt-6 mb-8 border-gray-200" />

        {/* Content div */}
        <div className="flex justify-between items-center gap-3">
            {/* Content */}
          <div className="w-full grid gap-10 md:grid-cols-[3fr,2fr] items-start">
            {/* Form */}
            <form className="space-y-4">
              <h2 className="text-lg font-semibold text-secondary">
                Tell us about yourself
              </h2>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Driving License */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Driving License Number
                </label>
                <input
                  type="text"
                  placeholder="Driving License Number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Region
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your Region
                  </option>
                  <option>Region 1</option>
                  <option>Region 2</option>
                  <option>Region 3</option>
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your District
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your District
                  </option>
                  <option>District 1</option>
                  <option>District 2</option>
                  <option>District 3</option>
                </select>
              </div>

              {/* NID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NID No
                </label>
                <input
                  type="text"
                  placeholder="NID No"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Bike brand */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bike Brand Model and Year
                </label>
                <input
                  type="text"
                  placeholder="Bike Brand Model and Year"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Bike registration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bike Registration Number
                </label>
                <input
                  type="text"
                  placeholder="Bike Registration Number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* About yourself */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell Us About Yourself
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell Us About Yourself"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-4 rounded-md bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 text-sm shadow-sm transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Right-side illustration */}
          <div className="w-full hidden md:flex justify-center items-center">
            {/* Replace src with your own image path */}
            <img
              src={bearider}
              alt="Rider illustration"
              className="max-h-80 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
