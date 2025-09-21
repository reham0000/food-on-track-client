

const Footer = () => {
    return (
        <div>
             <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">FoodOnTrack</h2>
          <p className="text-sm text-gray-200">
            Order your favorite food online while traveling with Bangladesh
            Railway. Fast, safe & hygienic delivery right to your seat.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Order Now
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm">✉️ support@br-foodorder.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-green-900 hover:bg-yellow-500 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-green-900 hover:bg-yellow-500 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-green-900 hover:bg-yellow-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-950 text-center py-4 text-sm">
        © {new Date().getFullYear()} Bangladesh Railway Food Service. All Rights Reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;