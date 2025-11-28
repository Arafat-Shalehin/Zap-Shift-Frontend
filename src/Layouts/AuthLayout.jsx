// AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ScrollToTop from "../Pages/Shared/ScrollToTop";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex flex-col-reverse md:flex-row  min-h-screen max-w-7xl border border-gray-300 shadow rounded">
        <ScrollToTop/>
        {/* Left: form (Outlet) */}
        <div className="flex-1 bg-white">
          <main className="h-full">
            <Outlet />
          </main>
        </div>

        {/* Right: illustration */}
        <div className="flex-1 flex items-center justify-center bg-[#F7FAEF]">
          <img
            src={authImg}
            alt="Auth"
            className="w-4/5 max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;