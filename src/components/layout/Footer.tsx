
import { Link } from "react-router-dom";
import { Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-400">
              Connecting talented artists with amazing events across India.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Event Planners</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/artists" className="hover:text-white transition-colors">Browse Artists</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Artists</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/onboard" className="hover:text-white transition-colors">Join Platform</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Artist Dashboard</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Artistly. All rights reserved. Built for Frontend Developer Assignment.</p>
        </div>
      </div>
    </footer>
  );
};
