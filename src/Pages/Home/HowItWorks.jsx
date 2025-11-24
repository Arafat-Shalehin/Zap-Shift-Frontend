// HowItWorks.jsx
import { FiMapPin } from "react-icons/fi";

const steps = [
  "Booking Pick & Drop",
  "Cash On Delivery",
  "Delivery Hub",
  "Booking SME & Corporate",
];

export default function HowItWorks() {
  return (
    <section className="flex justify-center pb-15">
      <div className="w-full px-10">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#0b4b4b] mb-6">
          How it Works
        </h2>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((title) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-3 h-full"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full border border-[#0b4b4b]/40 flex items-center justify-center text-[#0b4b4b]">
                <FiMapPin size={20} />
              </div>

              {/* Text */}
              <h3 className="text-[15px] font-semibold text-gray-800">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500">
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}