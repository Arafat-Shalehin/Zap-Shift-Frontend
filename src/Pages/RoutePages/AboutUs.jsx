// AboutUs.jsx
import React, { useState } from "react";

const AboutUs = () => {
  const tabs = ["Story", "Mission", "Success", "Team & Others"];
  const [activeTab, setActiveTab] = useState("Story");

  const paragraph =
    "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.";

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full bg-white rounded-4xl border border-[#E1E5EB] shadow-sm px-6 py-8 md:px-14 md:py-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#00513F]">
            About Us
          </h1>
          <p className="mt-3 text-xs md:text-sm text-gray-500 max-w-3xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </header>

        <hr className="mt-6 mb-8 border-[#E1E5EB]" />

        {/* Tabs */}
        <nav className="flex gap-10 text-sm md:text-base font-medium mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`transition-colors ${
                activeTab === tab
                  ? "text-[#8BC53F]"
                  : "text-gray-500 hover:text-[#00513F]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Body text */}
        <div className="space-y-4 text-[13px] md:text-sm leading-relaxed text-[#616971]">
          <p>{paragraph}</p>
          <p>{paragraph}</p>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;