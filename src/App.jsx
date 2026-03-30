import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoCard from "./components/VideoCard";
import Companies from "./Components/Companies";
import Experience from "./Components/Experince";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      <Navbar />
      <Hero />
      <VideoCard />
      <Companies/>
      <Experience/>
      <Services/>
      <Footer/>

    </div>
  );
}