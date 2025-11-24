// FeaturesSection.jsx

import firstImg from "../../assets/safe-delivery.png"
import secondImg from "../../assets/live-tracking.png"

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: secondImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage‑free delivery every time.",
    img: firstImg,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: firstImg,
  },
];

export default function FeaturesSection() {
  return (
    <section className="flex justify-center pb-15">
      <div className="w-full space-y-5">
        {/* top dashed line */}
        <div className="border-t border-dashed border-[#b9c9c8] mb-10" />

        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-sm px-6 py-6 md:px-10 md:py-8
                       flex flex-col md:flex-row items-center gap-6"
          >
            {/* illustration */}
            <div className="md:w-[20%] flex justify-center md:justify-start">
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-auto md:w-40"
              />
            </div>

            {/* dashed divider: vertical on md+, horizontal on small */}
            <div className="hidden md:block w-px self-stretch border-l border-dashed border-[#9bb1b0]" />
            <div className="md:hidden w-full border-t border-dashed border-[#9bb1b0]" />

            {/* text */}
            <div className="md:w-[70%] text-left">
              <h3 className="text-base md:text-lg font-semibold text-[#0b4b4b] mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* bottom dashed line */}
        <div className="border-t border-dashed border-[#b9c9c8] mt-10" />
      </div>
    </section>
  );
}