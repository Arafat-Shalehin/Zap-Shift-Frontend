import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="border border-gray-200 rounded-lg p-10 m-10 shadow-sm">
      <div>
        <h1 className="text-4xl text-secondary font-bold">
          Payment History: {payments.length}
        </h1>
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra border border-gray-300 shadow-sm bg-blue-300/20 rounded-none rounded-t-xl">
            {/* head */}
            <thead>
              <tr>
                <th>SL No</th>
                <th>Parcel Info</th>
                <th>Recipient Info</th>
                <th>Tracking Number</th>
                <th>Payment Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{payment.parcelName}</td>
                  <td>{payment.details}</td>
                  <td>{payment.trackingId}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    <button className="bg-blue-300/20 border px-6 py-2 shadow-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
