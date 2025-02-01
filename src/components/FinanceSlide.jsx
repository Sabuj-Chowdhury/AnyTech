import bitcoin from "../assets/images/bitcoin.jpg";
import graph from "../assets/images/graph.jpg";
import lineGrapgh from "../assets/images/lineGrapgh.jpg";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    image: bitcoin,
    category: "Customer focused",
  },
  {
    id: 2,
    title: "Agile and adaptable",
    description:
      "Optimize your financial solutions with adaptable and scalable technologies tailored for dynamic market conditions.",
    image: graph,
    category: "Agile and adaptable",
  },
  {
    id: 3,
    title: "Compliance ready",
    description:
      "Ensure regulatory compliance with integrated risk management and automated compliance workflows.",
    image: lineGrapgh,
    category: "Compliance ready",
  },
  {
    id: 4,
    title: "Secure and safe",
    description:
      "Leverage state-of-the-art security infrastructure to safeguard transactions and customer data.",
    image: graph,
    category: "Secure and safe",
  },
];

const FinanceSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="container mx-auto text-center py-12">
      <motion.h4
        className="text-blue-600 font-semibold uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        technology built for you
      </motion.h4>

      <motion.h2
        className="text-5xl font-extrabold text-gray-900 mt-2 mb-5 md:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
      >
        The future of finance
      </motion.h2>

      {/* Tabs */}
      <div className="hidden md:flex justify-center space-x-4 mb-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-4 py-2 rounded-full text-lg font-medium transition-all ${
              index === activeIndex
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {slide.category}
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center bg-transparent p-6 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {slides[activeIndex].title}
              </h3>
              <p className="text-gray-600">{slides[activeIndex].description}</p>
            </div>
            <img
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              className="md:w-1/2 mt-4 md:mt-0 rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* next/prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FinanceSlide;
