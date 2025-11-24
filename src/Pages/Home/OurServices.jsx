// OurServices.jsx
import { useState } from "react";
import { FiPackage } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    text: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick‑up to drop‑off.",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    text: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    text: "We also offer customized service with inventory management support, online order processing, packaging, and after‑sales support.",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    text: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    text: "Customized corporate services which include warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    text: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

export default function OurServices() {
  // default selected is the middle (Nationwide Delivery) like in the design
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full flex justify-center pb-15">
      <div className="w-full bg-[#003c3c] rounded-3xl py-10 px-6 md:px-12 text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Our Services</h2>
        <p className="max-w-2xl mx-auto text-xs md:text-sm text-[#d7e7e6] leading-relaxed">
          Enjoy fast, reliable parcel delivery with real‑time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`relative rounded-3xl p-6 md:p-7 text-left shadow-sm border transition-all duration-200
                ${
                  isActive
                    ? "bg-lime-400 border-lime-400 text-gray-900"
                    : "bg-white border-transparent hover:shadow-md"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center
                  ${
                    isActive
                      ? "bg-white/80 text-[#0b4b4b]"
                      : "bg-[#f5f7ff] text-[#0b4b4b]"
                  }`}
                >
                  <FiPackage size={22} />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs md:text-[13px] leading-relaxed
                  ${isActive ? "text-gray-800" : "text-gray-500"}`}
                >
                  {service.text}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}