const Footer = () => {
  return (
    <div>
      <section className="bg-[#002045] text-white">
        <div className="container mx-auto py-12 px-10 flex flex-row justify-between items-center">
          <h2 className="font-bold text-3xl uppercase mb-4 md:mb-0">anytech</h2>
          <div className="flex flex-col md:flex-row justify-between w-full md:w-1/3 items-center">
            <p className="mr-2">Our solution</p>
            <div className="divider divider-horizontal  "></div>
            <div className="flex flex-col md:flex-row">
              <p className="mr-4">AnyCaas</p>
              <p className="mr-4">AnyBaas</p>
              <p>AnyPaas</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#00152d] text-blue-500 p-4 shadow-lg">
        <div className="container mx-auto">
          <aside className="flex flex-col md:flex-row justify-between items-center">
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              Any Technology Pte Ltd.
            </p>
            <p className="mt-2 md:mt-0">Privacy Policy</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
