import React from 'react';
import Logo from '/src/assets/logo-footer.svg.png'; // <-- replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer grid with logo */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-gray-200">
          {/* Logo column */}
          <div className="flex flex-col items-start space-y-4">
            <img src={Logo} alt="Website Logo" className="h-10 w-auto" />
            <p className="text-gray-500 text-sm">
              Your website tagline or short description goes here.
            </p>
          </div>

          {/* Column 1 - Product */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Book a demo
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-sm font-semibold text-whitetracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-white hover:text-gray-900 transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - empty or social links */}
          <div></div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Welcome. All rights reserved. | <a href="https://github.com/Adil-Ahmed-1">Desgin By Adil Khoso</a> 
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;