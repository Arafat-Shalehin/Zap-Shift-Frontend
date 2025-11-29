import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlassPlus, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      console.log(res.data.data);
      return res.data.data;
    },
  });

  const handleParcelDlt = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure about deleting this?",
      text: "You can't revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data.data);
          refetch();
          if (res.data.data.deletedCount) {
            toast.success(res.data.message);
          }
        });
      }
    });
  };
  return (
    <div>
      <h1>All of my parcels: {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, idx) => (
              <tr key={parcel._id}>
                <th>{idx + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelType}</td>
                <td>{parcel.parcelWeight}</td>
                <td>Cost</td>
                <td>Pending</td>
                <td className="flex items-center gap-2">
                  <button className="btn btn-square hover:bg-primary">
                    <FiEdit />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlassPlus />
                  </button>
                  <button
                    onClick={() => handleParcelDlt(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
