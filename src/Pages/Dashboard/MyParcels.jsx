import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {useQuery} from "@tanstack/react-query";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      console.log(res);
      return res.data.data;
    },
  });
  return (
    <div>
      <h1>All of my parcels: {parcels.length}</h1>
    </div>
  );
};

export default MyParcels;
