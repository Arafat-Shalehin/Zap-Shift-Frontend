import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import EarthLoader from "../../Shared/EarthLoader";

function Payment() {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`parcels/${parcelId}`);
      return res.data.data;
    },
  });

  // Did not run the code
  const handlePayment = async () => {
    const paymentInfo = {
      parcelId: parcel._id,
      parcelName: parcel.parcelName,
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
    };
    const res = await axiosSecure.post("/payment-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  }

  if (isLoading) return EarthLoader;
  return (
    <div>
      <h1>
        Please Pay ${parcel.cost} for {parcel.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn btn-primary text-black">Pay</button>
    </div>
  );
}

export default Payment;
