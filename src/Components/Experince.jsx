import React from "react";

const Experience = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="mb-16">
        <h4 className="text-gray-400 mb-2">An unmatched attendee</h4>
        <h1 className="text-4xl md:text-6xl font-semibold">Experience</h1>
      </div>

      {/* 🔥 FIRST BIG BOX */}
      <div className="bg-gray-900 rounded-2xl p-8 mb-10 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Interactive overlays
          </h3>
          <p className="text-gray-400">
            Add custom branded graphics that lay over your live video.
          </p>
        </div>

        {/* Right Image */}
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          className="rounded-xl"
          alt=""
        />
      </div>

      {/* 🔥 SECOND ROW (2 BOXES) */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

        {/* Box 1 */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-3">Interactive Polls</h3>
          <p className="text-gray-400 mb-4">
            Real-time polls with instant results.
          </p>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            className="rounded-lg"
            alt=""
          />
        </div>

        {/* Box 2 */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-3">HD Video Quality</h3>
          <p className="text-gray-400 mb-4">
            Crystal clear HD streaming experience.
          </p>
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8b7f6bdf3d"
            className="rounded-lg"
            alt=""
          />
        </div>

      </div>

      {/* 🔥 THIRD ROW (2 DIFFERENT BOXES) */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Special Layout Box */}
        <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-4">

          {/* Top Text */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Q&A</h3>
            <p className="text-gray-400">
              Ask questions and interact live.
            </p>
          </div>

          {/* Bottom Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-lg"
            alt=""
          />

          {/* Extra Text */}
          <p className="text-gray-500 text-sm">
            Users can upvote questions and join live.
          </p>
        </div>

        {/* Normal Box */}
        <div className="bg-gray-900 rounded-2xl p-6 grid gap-4">
          <h3 className="text-xl font-semibold">Chat</h3>
          <p className="text-gray-400">
            Engage with audience using real-time chat.
          </p>

          <img
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040"
            className="rounded-lg"
            alt=""
            
          />
          
        </div>

      </div>
      

    </section>
    
  );
};

export default Experience;