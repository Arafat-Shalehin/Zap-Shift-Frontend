// PricingCalculator.jsx
import React, { useState } from "react";

const PricingCalculator = () => {
  const [parcelType, setParcelType] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight) || 0;

    // Simple sample pricing logic
    let cost = 50 + w * 10; // base 50 Tk + 10 Tk per kg
    if (destination === "Outside City") cost += 40;
    if (parcelType === "Fragile") cost += 20;

    setPrice(cost || 0);
  };

  const handleReset = () => {
    setParcelType("");
    setDestination("");
    setWeight("");
    setPrice(50);
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full rounded-4xl bg-white border border-gray-200 shadow-sm px-6 py-8 md:px-14 md:py-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold text-emerald-800">
            Pricing Calculator
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-3xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
          </p>
        </header>

        <hr className="mt-6 mb-10 border-gray-200" />

        <h2 className="text-center text-lg md:text-xl font-semibold text-emerald-800 mb-5">
          Calculate Your Cost
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-20 gap-10">
          {/* Left: form */}
          <form
            onSubmit={handleCalculate}
            className="space-y-4 max-w-sm w-full mx-auto md:mx-0"
          >
            {/* Parcel type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parcel type
              </label>
              <select
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={parcelType}
                onChange={(e) => setParcelType(e.target.value)}
              >
                <option value="">Select Parcel type</option>
                <option>Regular</option>
                <option>Fragile</option>
                <option>Document</option>
              </select>
            </div>

            {/* Delivery destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Destination
              </label>
              <select
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select Delivery Destination</option>
                <option>Inside City</option>
                <option>Outside City</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (KG)
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder="Contact"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-1/3 rounded-md border border-gray-300 bg-white text-gray-700 text-sm font-medium py-2 hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                type="submit"
                className="flex-1 rounded-md bg-lime-400 hover:bg-lime-500 text-white text-sm font-semibold py-2 shadow-sm transition-colors"
              >
                Calculate
              </button>
            </div>
          </form>

          {/* Right: price display */}
          <div className="flex justify-center md:justify-end items-center h-full">
            <span className="text-6xl md:text-8xl font-black text-gray-900">
              {price} Tk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;