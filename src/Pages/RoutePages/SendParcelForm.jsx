import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

export default function SendParcelForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  //   console.log(serviceCenters);
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  //   console.log(regionsDuplicate);
  const regions = [...new Set(regionsDuplicate)];
  //   console.log(regions);
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    // console.log(regionDistricts);
    const districts = regionDistricts.map((d) => d.district);
    // console.log(districts);
    return districts;
  };

  const [form, setForm] = useState({
    parcelName: "",
    parcelWeight: "",
    senderName: "",
    senderAddress: "",
    senderPhone: "",
    senderDistrict: "",
    pickupInstruction: "",
    receiverName: "",
    receiverAddress: "",
    receiverPhone: "",
    receiverDistrict: "",
    deliveryInstruction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSenderFormSubmit = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        const minCharge = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Parcel will be sent to designated location.");
      }
    });
  };

  const labelClass = "text-xs font-semibold text-slate-600 mb-1";
  const inputClass =
    "w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500";

  return (
    <div className="flex justify-center items-start py-10">
      {/* Toast container */}
      <Toaster position="top-center" />

      <div className="w-full bg-white rounded-4xl border border-slate-100 shadow-sm px-8 sm:px-10 py-10 sm:py-12">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-secondary">
          Send A Parcel
        </h1>
        <p className="mt-2 text-sm text-slate-500">Enter your parcel details</p>

        <div className="mt-6 border-t border-slate-100" />

        {/* Parcel type toggle */}
        <div className="mt-6 flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio"
                defaultChecked
              />
              Document
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                className="radio"
              />
              Non-Document
            </label>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleSenderFormSubmit)}
          className="mt-8 space-y-10"
        >
          {/* Parcel basic info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className={labelClass}>Parcel Name</p>
              <input
                required
                type="text"
                placeholder="Parcel Name"
                className={inputClass}
                onChange={handleChange}
                {...register("parcelName")}
              />
            </div>
            <div>
              <p className={labelClass}>Parcel Weight (KG)</p>
              <input
                required
                type="text"
                placeholder="Parcel Weight (KG)"
                className={inputClass}
                onChange={handleChange}
                {...register("parcelWeight")}
              />
            </div>
          </div>

          {/* Sender & Receiver details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sender */}
            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-4">
                Sender Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className={labelClass}>Sender Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Sender Name"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("senderName")}
                  />
                </div>
                <div>
                  <p className={labelClass}>Address</p>
                  <input
                    required
                    type="text"
                    placeholder="Address"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("senderAddress")}
                  />
                </div>
                <div>
                  <p className={labelClass}>Sender Phone No</p>
                  <input
                    required
                    type="text"
                    placeholder="Sender Phone No"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("senderPhone")}
                  />
                </div>
                <div>
                  {/* Sender Region */}
                  <p className={labelClass}>Your Region</p>
                  <div className="relative">
                    <select
                      defaultValue="Pick a region"
                      className={`${inputClass} appearance-none pr-10`}
                      onChange={handleChange}
                      {...register("senderRegion")}
                    >
                      {regions.map((d, idx) => (
                        <option key={idx} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  </div>
                </div>
                <div>
                  {/* Sender District */}
                  <p className={labelClass}>Your District</p>
                  <div className="relative">
                    <select
                      defaultValue="Pick a district"
                      className={`${inputClass} appearance-none pr-10`}
                      onChange={handleChange}
                      {...register("senderDistrict")}
                    >
                      {districtsByRegion(senderRegion).map((d, idx) => (
                        <option key={idx} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  </div>
                </div>
                <div>
                  <p className={labelClass}>Pickup Instruction</p>
                  <textarea
                    rows={3}
                    placeholder="Pickup Instruction"
                    className={`${inputClass} resize-none`}
                    onChange={handleChange}
                    {...register("pickupInstruction")}
                  />
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-4">
                Receiver Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className={labelClass}>Receiver Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Receiver Name"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("receiverName")}
                  />
                </div>
                <div>
                  <p className={labelClass}>Receiver Address</p>
                  <input
                    required
                    type="text"
                    placeholder="Address"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("receiverAddress")}
                  />
                </div>
                <div>
                  <p className={labelClass}>Receiver Contact No</p>
                  <input
                    required
                    type="text"
                    placeholder="Receiver Contact No"
                    className={inputClass}
                    onChange={handleChange}
                    {...register("receiverPhone")}
                  />
                </div>
                <div>
                  {/* receiver Region */}
                  <p className={labelClass}>Receiver Region</p>
                  <div className="relative">
                    <select
                      defaultValue="Pick a region"
                      className={`${inputClass} appearance-none pr-10`}
                      onChange={handleChange}
                      {...register("receiverRegion")}
                    >
                      {regions.map((d, idx) => (
                        <option key={idx} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  </div>
                </div>
                <div>
                  {/* receiver District */}
                  <p className={labelClass}>Receiver District</p>
                  <div className="relative">
                    <select
                      defaultValue="Pick a district"
                      className={`${inputClass} appearance-none pr-10`}
                      onChange={handleChange}
                      {...register("receiverDistrict")}
                    >
                      {districtsByRegion(receiverRegion).map((d, idx) => (
                        <option key={idx} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <IoChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  </div>
                </div>
                <div>
                  <p className={labelClass}>Delivery Instruction</p>
                  <textarea
                    rows={3}
                    placeholder="Delivery Instruction"
                    className={`${inputClass} resize-none`}
                    onChange={handleChange}
                    {...register("deliveryInstruction")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer note & button */}
          <div>
            <p className="text-xs text-slate-400">
              * PickUp Time 4pm-7pm Approx.
            </p>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#B5E428] px-8 py-2.5 text-sm font-semibold text-[#003824] hover:bg-lime-400 transition-colors"
            >
              Proceed to Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
