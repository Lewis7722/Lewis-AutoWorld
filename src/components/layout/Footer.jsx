import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4 text-2xl font-bold text-white transition-colors hover:text-primary">
              LewisAutoWorld
            </Link>
            <p className="mb-6 leading-relaxed text-gray-400">
              Drive Luxury. Drive Passion. We create your automotive experience more aesthetic and premium.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-400 hover:text-white group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.808-2.026 1.297-3.323 1.297zm8.062-8.539c-.317 0-.587-.27-.587-.587s.27-.587.587-.587.587.27.587.587-.27.587-.587.587zm1.533 1.533c-.317 0-.587-.27-.587-.587s.27-.587.587-.587.587.27.587.587-.27.587-.587.587z"/>
                  <path d="M12.017 5.73c-3.487 0-6.287 2.8-6.287 6.287s2.8 6.287 6.287 6.287 6.287-2.8 6.287-6.287-2.8-6.287-6.287-6.287zm0 10.374c-2.267 0-4.087-1.82-4.087-4.087s1.82-4.087 4.087-4.087 4.087 1.82 4.087 4.087-1.82 4.087-4.087 4.087z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-800 hover:text-white group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-sm text-gray-400 transition-colors hover:text-white">
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-gray-400 transition-colors hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/test-drive" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Book Test Drive
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-primary">📍</span>
                <span>123 Luxury Avenue<br />Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">✉️</span>
                <span>sales@lewisautoworld.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">🕒</span>
                <span>Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Lewis Auto World. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}