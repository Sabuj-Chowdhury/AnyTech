import waveLinesDesktop1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import waveLinesDesktop2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import mobilePicture from "../assets/images/mobile.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-blue-900 to-blue-500 overflow-hidden">
      {/* Background Waves */}
      <motion.img
        src={waveLinesDesktop1}
        alt="Wave 1"
        className="absolute top-0 left-0 w-full h-full opacity-40"
        initial={{ x: 0 }}
        animate={{ x: [0, 100, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={waveLinesDesktop2}
        alt="Wave 2"
        className="absolute top-0 left-0 w-full h-full opacity-40"
        initial={{ x: 600 }}
        animate={{ x: [200, 0, 400] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center md:text-left text-white max-w-3xl">
        <motion.h1
          className="text-5xl mt-10 md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Embrace the Future of Finance
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Reimagine financial services with our cutting-edge platform.
        </motion.p>
        <motion.button
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Reach Out to Us
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.div
        className="relative mt-10 md:mt-0"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={mobilePicture}
          className="w-full md:w-96 rounded-xl shadow-lg"
          alt="Mobile"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
