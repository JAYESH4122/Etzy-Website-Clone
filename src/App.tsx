import Header from "./components/molecule/Header";
import HeroSection from "./components/molecule/HeroSection";
import PopularCategorySection from "./components/molecule/PopularCategorySection";
import GiftsSection from "./components/molecule/GiftsSection";
import PopularGiftsSection from "./components/molecule/PopularGiftsSection";
import Footer from "../examples/Footer";
const App = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
      <GiftsSection />
      <PopularGiftsSection />
      <Footer />
    </div>
  );
};

export default App;
