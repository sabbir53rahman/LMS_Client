import React from "react";
import Home from "./(home)/home/page";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default page;
