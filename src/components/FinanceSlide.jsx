import bitcoin from "../assets/images/bitcoin.jpg";
import graph from "../assets/images/graph.jpg";
import lineGraph from "../assets/images/lineGrapgh.jpg";
import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    main: "CUSTOMER FOCUSED",
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    subDescription:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: bitcoin,
    category: "Customer Focused",
  },
  {
    id: 2,
    main: "AGILE AND ADAPTABLE",
    title: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    subDescription:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: graph,
    category: "Agile and Adaptable",
  },
  {
    id: 3,
    main: "COMPLIANCE READY",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management through real-time risk monitoring solutions powered by AI and machine learning.",
    subDescription:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card systems.",
    image: lineGraph,
    category: "Compliance Ready",
  },
  {
    id: 4,
    main: "SECURE AND SAFE",
    title: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    subDescription:
      "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust and reliable systems.",
    image: graph,
    category: "Secure and Safe",
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
        Technology built for you
      </motion.h4>

      <motion.h2
        className="text-5xl font-extrabold text-gray-900 mt-2 mb-5 md:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
      >
        The future of finance
      </motion.h2>

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

      <div className=" relative w-full max-w-6xl mx-auto">
        <LazyLoad height={500} offset={100} once>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-center items-center text-left bg-transparent p-6 md:p-10 rounded-lg space-y-6 md:space-y-0 md:space-x-10 overflow-hidden shadow-lg"
            >
              <div className="w-full md:w-1/2 min-h-[480px] text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-2">
                  {slides[activeIndex].main}
                </h3>
                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
                  {slides[activeIndex].title}
                </h3>
                <p className="text-black font-bold">
                  {slides[activeIndex].description}
                </p>
                <p className="text-gray-600 mt-5">
                  {slides[activeIndex].subDescription}
                </p>
              </div>
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full md:w-1/2 rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </LazyLoad>

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
