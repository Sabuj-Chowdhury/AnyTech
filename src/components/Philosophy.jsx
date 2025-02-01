import { motion } from "framer-motion";
import { FaNetworkWired, FaLightbulb, FaMicrochip } from "react-icons/fa";

const Philosophy = () => {
  return (
    <motion.section
      className="container mx-auto text-center py-12 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <motion.h4
        className="text-blue-600 font-semibold uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Our Philosophy
      </motion.h4>

      <motion.h2
        className="text-5xl font-extrabold text-gray-900 mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
      >
        Human-centred innovation
      </motion.h2>

      {/* Main Cards */}
      <motion.div
        className="mt-10 bg-blue-50 p-8 rounded-xl shadow-lg grid gap-6 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.05 }}
        >
          <h5 className="text-blue-600 text-sm font-semibold">Core Tech</h5>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">
            Artificial Intelligence
          </h3>
          <p className="text-gray-600 text-sm mt-2 text-center">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve
            efficiency.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.1 },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <h5 className="text-orange-500 text-sm font-semibold">Mechanism</h5>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">Blockchain</h3>
          <p className="text-gray-600 text-sm mt-2 text-center">
            Enhanced security by eliminating intermediaries.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="grid gap-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="bg-white shadow-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h5 className="text-teal-500 text-sm font-semibold">
              Infrastructure
            </h5>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Cloud</h3>
            <p className="text-gray-600 text-sm mt-2">
              Scale resources easily on-demand.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h5 className="text-yellow-500 text-sm font-semibold">Resource</h5>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Data</h3>
            <p className="text-gray-600 text-sm mt-2">
              Valuable, actionable insights from mass data sources.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Secondary Section */}
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="bg-[#F8FBFF] shadow-md p-6 rounded-xl text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-[#EAF2FF] p-3 rounded-full">
            <FaNetworkWired size={24} className="text-[#0F3D91]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Full-suite solutions
          </h3>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#F8FBFF] shadow-md p-6 rounded-xl text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.1 },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-[#DFF7E9] p-3 rounded-full">
            <FaLightbulb size={24} className="text-[#1B7340]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Simplify the complex
          </h3>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            Simplify complex processes and optimize your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#F8FBFF] shadow-md p-6 rounded-xl text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-[#FFEDE6] p-3 rounded-full">
            <FaMicrochip size={24} className="text-[#D65A31]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Cutting-edge tech
          </h3>
          <p className="text-gray-600 mt-2 text-center md:text-left">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Philosophy;
