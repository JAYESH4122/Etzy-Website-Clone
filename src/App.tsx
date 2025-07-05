import Header from "./components/molecule/Header";
import HeroSection from "./components/molecule/HeroSection";
import PopularCategorySection from "./components/molecule/PopularCategorySection";
import GiftsSection from "./components/molecule/GiftsSection";

const App = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
      <GiftsSection />
    </div>
  );
};

export default App;
