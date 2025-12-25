import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white px-6 py-12">
    
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 border border-blue-500 p-6 rounded-md">
   
        <div>
          <h5 className="text-sm text-blue-600 font-semibold uppercase">
            Contact Info
          </h5>
          <h2 className="text-3xl font-bold mb-6">Get in touch</h2>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>hello@creatx.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>(405) 555-0128</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>
                2464 Royal Ln. Mesa, <br />
                New Jersey 45463, USA
              </span>
            </div>
          </div>

        
          <div className="flex gap-4 mt-6 text-gray-500">
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaTelegramPlane /></Link>
            <Link to="#"><FaLinkedinIn /></Link>
          </div>
        </div>

       
        <div className="w-full h-72">
          <iframe
            title="map"
            className="w-full h-full rounded-md"
            src="public/map.png"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
       
        <div className="flex justify-center">
          <img
            src="public/illustration (8).png"
            alt="Contact"
            className="w-80"
          />
        </div>

      
        <div>
          <h5 className="text-sm text-gray-500 uppercase">Any questions?</h5>
          <h2 className="text-3xl font-bold mb-6">Drop us a line</h2>

          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border p-3 rounded col-span-1"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border p-3 rounded col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded col-span-1"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border p-3 rounded col-span-1"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="border p-3 rounded col-span-2"
            ></textarea>

            <div className="col-span-2 flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <span>
                I agree to receive communications from Creatx Online School
              </span>
            </div>

            <button
              type="submit"
              className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

