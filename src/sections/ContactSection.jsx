import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-500">Contact Us</h2>
          <p className="mt-2 text-base font-semibold text-gray-800">
            We'd love to hear from you! Reach out with any questions or
            concerns.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
          {/* Contact Information */}
          <div className="flex-1 lg:w-1/2 space-y-4">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-xl text-gray-800 mr-3"></i>
              <p className="text-gray-700">
                <p className="font-semibold">Address : </p> House no H999, Diwan
                Sahab Takia, Mominpura, NAGPUR, MAHARSHTRA-440018
              </p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-xl text-gray-800 mr-3"></i>
              <p className="text-gray-700">
                <p className="font-semibold">Mobile : </p>+91-9021772189, +91-
                6355212776
              </p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-xl text-gray-800 mr-3"></i>
              <p className="text-gray-700">contact@construction.com</p>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-800 hover:text-blue-400"
              >
                <FaFacebook className="text-2xl hover:text-amber-500" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-800 hover:text-blue-400"
              >
                <FaTwitter className="text-2xl hover:text-amber-500" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-800 hover:text-blue-400"
              >
                <FaLinkedin className="text-2xl hover:text-amber-500" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-800 hover:text-blue-400"
              >
                <FaInstagram className="text-2xl hover:text-amber-500" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 lg:w-1/2 mt-4">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-amber-400 py-2 px-4 rounded-lg font-semibold hover:bg-amber-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
