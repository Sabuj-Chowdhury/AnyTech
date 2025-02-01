import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="container mx-auto text-center py-16 px-6 lg:px-20">
      <h3 className="text-sm font-semibold text-blue-600 tracking-wide mb-6">
        TRUSTED BY THE BEST
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-extrabold text-blue-600 mt-2">
            &gt;<CountUp start={0} end={20}></CountUp>
          </h2>
          <p className="text-gray-700 text-lg mt-1">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-extrabold text-blue-600 mt-2">
            <CountUp start={0} end={40}></CountUp>+
          </h2>
          <p className="text-gray-700 text-lg mt-1">Financial Institutions</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-extrabold text-blue-600 mt-2">
            &gt;<CountUp start={0} end={200}></CountUp>m
          </h2>
          <p className="text-gray-700 text-lg mt-1">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
