import BanksLogo from "../components/BanksLogo";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import FinanceSlide from "../components/FinanceSlide";
import Philosophy from "../components/Philosophy";
import PoweringFuture from "../components/PoweringFuture";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <div>
      {/* banner/hero */}
      <Banner></Banner>
      <PoweringFuture></PoweringFuture>
      <Philosophy></Philosophy>
      <FinanceSlide></FinanceSlide>
      <Statistics></Statistics>
      <BanksLogo></BanksLogo>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
