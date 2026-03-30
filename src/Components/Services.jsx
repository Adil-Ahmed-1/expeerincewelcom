import React from "react";

const Services = () => {
  return (
    <section
      className="relative text-white py-24 px-6 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Build engaging experiences <br />
            that convert users
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Create powerful webinar experiences with interactive tools,
            high-quality streaming, and real-time audience engagement.
          </p>

          <button className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-500 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="section"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;