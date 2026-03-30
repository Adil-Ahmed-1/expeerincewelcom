import React from "react";

export default function VideoCard() {
  return (
    <div className="flex justify-center px-6 pb-20">
      
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">

        <img
          src="public/frame-bg-p-800.png.png"
          alt="webinar"
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-10 left-10">
          <h2 className="text-8xl font-serif text-yellow-200">
            Launch <br /> day
          </h2>
        </div>

        {/* Button */}
        <button className="absolute bottom-10 right-10 border border-yellow-200 text-yellow-200 px-6 py-2 rounded-full hover:bg-yellow-200 hover:text-black transition">
          LEARN MORE
        </button>

      </div>

    </div>
  );
}