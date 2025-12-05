import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1 className="text-green-500 text-3xl font-semibold text-center">
        Payment Successful
      </h1>
      <p>Your transaction ID is: <strong>{paymentInfo.transactionId}</strong></p>
      <p>Your tracking ID is: <strong>{paymentInfo.trackingId}</strong></p>
    </div>
  );
}

export default PaymentSuccess;
