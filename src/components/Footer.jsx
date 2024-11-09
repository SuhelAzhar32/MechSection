import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-800 text-white p-8 mt-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">MechSection Co.</h3>
          <p className="text-gray-300 mb-4">
            We provide high-quality construction services with a focus on
            integrity, reliability, and excellence.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-amber-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-amber-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-amber-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-amber-500" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-amber-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-500">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-amber-500">
                Our Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Phone:</span> (123) 456-7890
            </li>
            <li>
              <span className="font-bold">Email:</span> info@constructionco.com
            </li>
            <li>
              <span className="font-bold">Address:</span> 1234 Building St,
              City, Country
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-300 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-2/3 text-black"
            />
            <button className="bg-amber-500 text-black p-2 rounded-r-md hover:bg-amber-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          © 2023 MechSection Co. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
