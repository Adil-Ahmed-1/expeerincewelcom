import React from "react";

export default function Companies() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-24 relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600 opacity-10 blur-3xl"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            World-class teams <br />
            are upgrading to <br />
            Welcome
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-lg">
            Companies are ditching legacy platforms for the ability
            to deliver an engaging experience at every level.
          </p>

          {/* STAT */}
          <div className="flex items-start gap-4">
            <span className="text-green-400 text-3xl">↗</span>

            <div>
              <h3 className="text-3xl font-semibold">
                66%{" "}
                <span className="text-gray-400 text-xl font-normal">
                  attendance rate
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                avg attendance for Welcome customers
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT LOGOS (COLUMN STYLE LIKE FIGMA) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 opacity-60 text-gray-400">

          <span className="text-xl">Adobe</span>
          <span className="text-xl">1Password</span>

          <span className="text-xl">Square</span>
          <span className="text-xl">Checkr</span>

          <span className="text-xl">1Password</span>
          <span className="text-xl">Twilio</span>

          <span className="text-xl">NBA</span>
          <span className="text-xl">Broadcom</span>

          <span className="text-xl">Adobe</span>
          <span className="text-xl">Sendoso</span>

          <span className="text-xl">Motive</span>
          <span className="text-xl">Brex</span>

          <span className="text-xl">Univision</span>
        </div>

      </div>
    </section>
  );
}