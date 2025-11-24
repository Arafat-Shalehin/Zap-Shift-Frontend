// PriorityBanner.jsx
import locaMer from "../../assets/location-merchant.png";
import bg from "../../assets/be-a-merchant-bg.png";

export default function PriorityBanner() {
  return (
    <section className="flex justify-center pb-15">
      {/* Card */}
      <div
        className="
          relative w-full rounded-3xl overflow-hidden
          text-white px-6 md:px-10 py-10 md:py-12
          bg-[#003c3c]
        "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* LEFT: Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              Merchant and Customer Satisfaction
              <br className="hidden md:block" /> is Our First Priority
            </h2>
            <p className="text-xs md:text-sm text-[#d7e7e6] leading-relaxed mb-6 max-w-md">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                className="
                  px-6 md:px-8 py-3 rounded-full text-sm font-semibold
                  bg-primary text-gray-900 hover:bg-lime-300 transition-colors
                "
              >
                Become a Merchant
              </button>

              <button
                className="
                  px-6 md:px-8 py-3 rounded-full text-sm font-semibold
                  border border-lime-400 text-lime-200 bg-transparent
                  hover:bg-lime-400/10 transition-colors
                "
              >
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src={locaMer} alt="Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
