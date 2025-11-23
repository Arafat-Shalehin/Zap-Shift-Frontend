import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const RootLayouts = () => {
  return (
    <div className="bg-[#e5eaee]">
      <div className="max-w-7xl mx-auto p-3 lg:p-0">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default RootLayouts;
