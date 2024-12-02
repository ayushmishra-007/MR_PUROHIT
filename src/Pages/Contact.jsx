


import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Contact Card */}
      <div className="w-full max-w-4xl bg-orange-500  text-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col sm:flex-row">
          {/* Left Section */}
          <div className="sm:w-1/2 w-full space-y-6">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-lg">At Mr. Purohit, we believe that spirituality is a journey that grows richer with the right resources and guidance. Join us as we honor Sanatan Dharma, preserve its beauty, and make it a part of every household.</p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <p> info@mrpurohit.com </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhone className="text-xl" />
                <p> +91 74850 35644 </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl" />
                <p>4th floor TMPC Building, Golden George Nagar, Mogappair West, Maduraivoyal, Chennai, Tamil Nadu 600107</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/mrpurohit/" target="_blank" rel="noreferrer" className="hover:text-blue-800">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="https://x.com/_mrpurohit" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/mrpurohitofficial" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://youtube.com/@mrpurohitofficial" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="sm:w-1/2 w-full bg-white text-black rounded-lg p-6 shadow-lg mt-8 sm:mt-0 sm:ml-6">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                  placeholder="Enter your message"
                  rows="5"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
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

export default Contact;
