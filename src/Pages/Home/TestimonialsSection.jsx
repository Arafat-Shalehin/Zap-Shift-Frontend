// TestimonialsSection.jsx
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import quote from "../../assets/reviewQuote.png";
import customer from "../../assets/customer-top.png";

const testimonials = [
  {
    id: 1,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Rasel Ahamed",
    role: "CTO",
    quote:
      "Using this posture corrector has greatly reduced my back pain and helped me sit correctly during long working hours.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "CFO",
    quote:
      "Simple to use and very effective. I’ve noticed a clear improvement in my posture and overall comfort.",
  },
  {
    id: 4,
    name: "Eva Jahan",
    role: "Marketing Manager",
    quote:
      "I love how lightweight it feels while still reminding me to sit straight. Highly recommended.",
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="rounded-[28px] bg-white px-6 py-7 md:px-8 md:py-8 shadow-sm max-w-md mx-auto">
      <img src={quote} alt="Quote icon" />
      <p className="mt-4 text-xs md:text-sm text-gray-600 leading-relaxed">
        {item.quote}
      </p>

      <div className="mt-6 pt-4 border-t border-dashed border-gray-200 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0b4b4b]" />
        <div className="text-left">
          <p className="text-sm font-semibold text-[#0b4b4b]">{item.name}</p>
          <p className="text-xs text-gray-400">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex justify-center pb-15">
      <div className="w-full text-center">
        {/* top illustration */}
        <div className="flex justify-center mb-4">
          <img src={customer} alt="CustomerPick icon" />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4b4b]">
          What our customers are sayings
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* Swiper slider */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            centeredSlides={true}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2.0 },
              1024: { slidesPerView: 2.6 },
            }}
            className="testimonial-swiper overflow-visible px-2"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center py-4">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* custom controls + dots */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {/* left arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[#0b4b4b] hover:bg-gray-50"
          >
            <FiArrowLeft size={16} />
          </button>

          {/* dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeIndex ? "bg-[#0b4b4b]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* right arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center text-[#0b4b4b] hover:bg-lime-300"
          >
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
