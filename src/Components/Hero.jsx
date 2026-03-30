import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Captivate & Convert
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        A webinar platform designed for marketers to host jaw-dropping
        experiences that drive revenue.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-500 transition">
          Demo
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
          ▶ How it works
        </button>
      </div>

    </section>
  );
}