// Footer.jsx
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex justify-center py-10">
      {/* main footer card */}
      <footer className="w-[92%] bg-[#050505] text-white rounded-3xl px-6 md:px-16 py-10 shadow-lg">
        {/* logo + text */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2">
            {/* green bolt mark */}
            <span className="w-6 h-6 lg:w-10 lg:h-10 bg-lime-400 rounded-tl-3xl rounded-br-3xl -rotate-12 inline-block" />
            <span className="text-2xl lg:text-4xl font-semibold tracking-wide">ZapShift</span>
          </div>

          <p className="mt-5 max-w-2xl text-[11px] md:text-[14px] lg:text-lg text-gray-300 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real‑time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* thin dashed line */}
        <div className="mt-8 flex justify-center">
          <div className="w-2/1 md:w-1/2 border-t border-dashed border-gray-700" />
        </div>

        {/* navigation links */}
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px] lg:text-lg md:text-xs text-gray-200">
          {["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"].map(
            (item) => (
              <button
                key={item}
                className="hover:text-white transition-colors duration-150"
              >
                {item}
              </button>
            ),
          )}
        </nav>

        {/* second dashed line */}
        <div className="mt-4 flex justify-center">
          <div className="w-2/1 md:w-1/2 border-t border-dashed border-gray-700" />
        </div>

        {/* social icons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[#0a66c2] hover:bg-white/5"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="#"
            aria-label="X"
            className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-white/5"
          >
            <FaXTwitter size={14} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[#1877f2] hover:bg-white/5"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[#ff0000] hover:bg-white/5"
          >
            <FaYoutube size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}