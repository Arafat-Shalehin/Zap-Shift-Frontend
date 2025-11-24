// FAQSection.jsx
import { useState } from "react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    id: 2,
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, it is designed to be adjustable and comfortable for a wide range of ages and body types.",
  },
  {
    id: 3,
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Consistent use can help reduce strain on your back muscles and promote healthier posture habits.",
  },
  {
    id: 4,
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some models include gentle vibration reminders when you slouch, helping you stay mindful of your posture.",
  },
  {
    id: 5,
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe to restock alerts via email or SMS to be notified as soon as it becomes available.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(0);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="flex justify-center pb-15">
      <div className="w-full text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4b4b]">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mt-5 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well‑being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* FAQ List */}
        <div className="mt-8 space-y-3 text-left">
          {faqs.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors duration-150 ${
                  isOpen
                    ? "border-teal-400 bg-[#e9f7f6]"
                    : "border-transparent bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-sm md:text-[15px] font-medium text-[#163434]"
                >
                  <span>{item.question}</span>
                  <FiChevronDown
                    className={`ml-4 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 md:px-5 pb-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See more button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-3 px-6 md:px-8 py-3 rounded-full bg-primary text-sm md:text-[15px] font-semibold text-gray-900 shadow-sm hover:bg-lime-300 transition-colors">
            See More FAQ&apos;s
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
              <FiArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}