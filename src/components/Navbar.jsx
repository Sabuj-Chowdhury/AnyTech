const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 px-12 text-white">
      <div className="text-2xl font-bold">ANYTECH</div>
      <ul className="flex space-x-8 text-lg">
        <li className="cursor-pointer hover:underline">Solutions</li>
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">About Us</li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700">Contact Us</button>
    </nav>
  );
};

export default Navbar;
