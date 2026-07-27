import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollTop/ScrollTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
