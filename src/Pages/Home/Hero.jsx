// Hero.jsx
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import tinyMan from "../../assets/tiny-deliveryman.png"
import bigMan from "../../assets/big-deliveryman.png"

export default function Hero() {
  return (
    <div className="flex justify-center pb-15 pt-10">
      {/* white hero card */}
      <section className="w-full bg-white rounded-3xl px-8 md:px-12 py-10 shadow-sm flex flex-col md:flex-row items-center gap-10">
        {/* LEFT: text content */}
        <div className="md:w-1/2">
          <div>
            <img src={tinyMan} alt="DeliveryMan" />
          </div>

          {/* headline */}
          <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-gray-900">
            We Make Sure Your{" "}
            <span className="text-teal-600">Parcel Arrives</span> On Time – No
            Fuss.
          </h1>

          {/* sub‑text */}
          <p className="mt-4 text-sm md:text-[15px] text-gray-500 max-w-md leading-relaxed">
            Enjoy fast, reliable parcel delivery with real‑time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
          </p>

          {/* buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-300 transition-colors">
              Track Your Parcel
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white">
                <FiArrowUpRight size={14} />
              </span>
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              Be A Rider
            </button>
          </div>

          {/* small slider indicator */}
          <div className="mt-8 flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-teal-600" />
            <span className="h-[3px] w-6 rounded-full bg-[#b5e4e6]" />
            <span className="h-[3px] w-6 rounded-full bg-[#d7f1f3]" />
          </div>
        </div>

        {/* RIGHT: illustration */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace src with your actual illustration file */}
          <img
            src={bigMan}
            alt="Courier driving a vehicle with parcels"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </section>
    </div>
  );
}