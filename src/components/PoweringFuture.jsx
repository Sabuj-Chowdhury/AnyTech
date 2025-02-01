import WaveLinesDesktop3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import card from "../assets/images/card.jpg";
import home from "../assets/images/home.jpg";
import banking from "../assets/images/banking.jpg";
import model_with_tablet from "../assets/images/model_in_tablet.jpg";
import { motion } from "framer-motion";

const bounceAnimation = {
  y: ["0%", "-14%", "0%"],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const PoweringFuture = () => {
  return (
    <section className="relative container mx-auto w-full py-16 px-6 lg:px-20 bg-white">
      <motion.img
        src={WaveLinesDesktop3}
        alt="Background Waves"
        className="absolute top-0 right-0 w-1/2 opacity-20"
        animate={bounceAnimation}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Powering the Future of Finance
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mt-4">
            Uncovering new ways to delight customers
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            <span className="font-bold">
              AnyTech is revolutionizing financial technology
            </span>
            by introducing innovative and real-time transaction account
            processing capabilities, specifically designed for retail financial
            services.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <motion.div
            className="relative rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={model_with_tablet}
              alt="Financial Tech"
              className="w-full max-w-md rounded-xl"
            />
          </motion.div>

          {/* Floating Image */}
          <motion.div
            className="absolute top-10 left-[70px] w-16 h-16 bg-blue-200 shadow-md rounded-full flex items-center justify-center"
            animate={bounceAnimation}
          >
            <img
              src={card}
              alt="Card"
              className="w-12 h-12 rounded-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-[140px] w-16 h-16 bg-blue-200 shadow-md rounded-full flex items-center justify-center"
            animate={bounceAnimation}
          >
            <img
              src={banking}
              alt="Graph"
              className="w-12 h-12 rounded-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute top-0 right-[60px] w-16 h-16 bg-blue-200 shadow-md rounded-full flex items-center justify-center"
            animate={bounceAnimation}
          >
            <img
              src={home}
              alt="Bank"
              className="w-12 h-12 rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PoweringFuture;
