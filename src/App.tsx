import Header from "./components/molecule/Header";
import HeroSection from "./components/molecule/HeroSection";
import PopularCategorySection from "./components/molecule/PopularCategorySection";
import GiftsSection from "./components/molecule/GiftsSection";
import SubFooter from "./components/molecule/SubFooter";
import Footer from "./components/molecule/Footer";

const App = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
      <GiftsSection />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default App;
