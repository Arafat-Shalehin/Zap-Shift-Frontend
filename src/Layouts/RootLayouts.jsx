import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const RootLayouts = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-[92%] mx-auto min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayouts;
