import waveLinesDesktop1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import waveLinesDesktop2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import mobilePicture from "../assets/images/mobile.jpg";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-500 overflow-hidden">
      <Navbar />

      {/* Background Waves */}
      <motion.img
        src={waveLinesDesktop1}
        alt="Wave 1"
        className="absolute top-0 left-0 w-full h-full opacity-50"
        initial={{ x: 0 }}
        animate={{ x: 200 }}
        transition={{
          duration: 3,
          // repeat: Infinity,
          // repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={waveLinesDesktop2}
        alt="Wave 2"
        className="absolute top-0 left-0 w-full h-full opacity-50"
        initial={{ x: 300 }}
        animate={{ x: -200 }}
        transition={{
          duration: 3,
          // repeat: Infinity,
          // repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Embrace the Future of Finance
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Reimagine financial services with our cutting-edge platform.
        </motion.p>
        <motion.button
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Reach Out to Us
        </motion.button>
      </div>

      {/* Image Animation */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className=" bg-gradient-to-r from-blue-900 to-blue-500"
      >
        <img src={mobilePicture} className="w-96" alt="Mobile" />
      </motion.div>
    </section>
  );
};

export default Banner;
