
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-digital-navy text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Services</h3>
            <p className="text-gray-300 mb-4">Empowering India through digital transformation and affordable connectivity solutions.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#leadership" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#dashboard" className="text-gray-300 hover:text-white">Dashboard</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white">Partners</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-white">Achievements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@digitalservices.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Digital Services HQ, New Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
