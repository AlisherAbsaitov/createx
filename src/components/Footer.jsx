import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E212C] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

     
        <div className="md:col-span-2">
          <h2 className="text-white text-xl font-bold mb-4">
            CREATE<span className="text-orange-500">X</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Createx Online School is a leader in online studying.
            We have lots of courses and programs from the main
            market experts. We provide relevant approaches to
            online learning, internships and employment in the
            largest companies in the country.
          </p>

        
          <div className="flex gap-4 text-white">
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaTwitter className="cursor-pointer hover:text-orange-500" />
            <FaYoutube className="cursor-pointer hover:text-orange-500" />
            <FaTelegramPlane className="cursor-pointer hover:text-orange-500" />
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">SITE MAP</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Courses</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">COURSES</h3>
          <ul className="space-y-2 text-sm">
            <li>Marketing</li>
            <li>Management</li>
            <li>HR & Recruiting</li>
            <li>Design</li>
            <li>Development</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2 text-sm">
            <li>(405) 555-0128</li>
            <li>hello@createx.com</li>
          </ul>
        </div>

     
        <div className="md:col-span-5 lg:col-span-1">
          <h3 className="text-white font-semibold mb-4">
            SIGN UP TO OUR NEWSLETTER
          </h3>

          <div className="flex items-center bg-[#2B2E3A] rounded-md overflow-hidden mb-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <button className="px-4 text-white hover:text-orange-500">
              →
            </button>
          </div>

          <p className="text-xs text-gray-400">
            *Subscribe to our newsletter to receive communications
            and early updates from Createx SEO Agency.
          </p>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-12 py-6 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p>
            © All rights reserved. Made with{" "}
            <span className="text-orange-500">❤</span> by Createx Studio
          </p>
          <a href="#" className="text-gray-400 hover:text-white">
            GO TO TOP
          </a>
        </div>
      </div>
    </footer>
  );
}
