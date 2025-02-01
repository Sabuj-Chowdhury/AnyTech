import { FaArrowRight } from "react-icons/fa";
import WaveLinesDesktop1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "../assets/backgrounds/WaveLinesDesktop4.svg";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="relative py-16 px-6 lg:px-20 bg-gradient-to-r from-blue-900 to-blue-500 ">
      <motion.img
        src={WaveLinesDesktop1}
        alt="Wave 1"
        className="absolute top-0 left-[-500px]w-full h-full opacity-40"
        initial={{ x: -100 }}
        animate={{ x: [0, 100, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={WaveLinesDesktop2}
        alt="Wave 1"
        className="absolute top-0 left-[-300px]  w-full h-full opacity-40"
        initial={{ x: 100 }}
        animate={{ x: [0, 500, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={WaveLinesDesktop3}
        alt="Wave 1"
        className="absolute top-0 left-[-700px] w-full h-full opacity-40"
        initial={{ x: -100 }}
        animate={{ x: [0, 300, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={WaveLinesDesktop4}
        alt="Wave 1"
        className="absolute top-0 left-0 w-full h-full opacity-40"
        initial={{ x: -100 }}
        animate={{ x: [0, 300, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container mx-auto text-center">
        <h2 className="text-white text-5xl font-bold mb-6">Legacy no longer</h2>
        <p className="text-xl text-white mb-12">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-start justify-start mx-auto px-8 py-4 bg-[#FF6B6B] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#FF5252] transition-colors"
        >
          Contact Us
          <FaArrowRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default ContactUs;
