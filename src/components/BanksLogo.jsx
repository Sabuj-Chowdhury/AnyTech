import Marquee from "react-fast-marquee";
import one from "../assets/icons/iconsImage/1.webp";
import two from "../assets/icons/iconsImage/2.webp";
import three from "../assets/icons/iconsImage/3.webp";
import four from "../assets/icons/iconsImage/4.webp";
import five from "../assets/icons/iconsImage/5.webp";
import six from "../assets/icons/iconsImage/6.webp";
import seven from "../assets/icons/iconsImage/7.webp";
import eight from "../assets/icons/iconsImage/8.webp";
import nine from "../assets/icons/iconsImage/9.webp";
import ten from "../assets/icons/iconsImage/10.webp";
import eleven from "../assets/icons/iconsImage/11.svg";
import thirteen from "../assets/icons/iconsImage/13.webp";
import fourteen from "../assets/icons/iconsImage/14.webp";
import fifteen from "../assets/icons/iconsImage/15.png";

const logos = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  thirteen,
  fourteen,
  eleven,
  fifteen,
];

const BanksLogo = () => {
  return (
    <div className="container mx-auto text-center py-16 px-6 lg:px-20">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-5 lg:gap-24 md:gap-10 ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Bank Logo ${index + 1}`}
            className="h-16 mx-auto"
          />
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden">
        <Marquee gradient={false} speed={50}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Bank Logo ${index + 1}`}
              className="h-16 mx-4"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BanksLogo;
