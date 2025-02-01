import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-blue-500 p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white uppercase"
          >
            anytech
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white text-xl">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300  transition"
          >
            Solutions
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300 transition"
          >
            Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300 transition"
          >
            About Us
          </motion.button>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex text-lg"
        >
          <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
            Contact Us
          </button>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden flex flex-col bg-blue-500 text-white p-4 space-y-4"
          >
            <button className="hover:text-black">Solutions</button>
            <button className="hover:text-black">Services</button>
            <button className="hover:text-black">About Us</button>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-4 py-2 w-1/2  rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
