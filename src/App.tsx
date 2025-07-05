import Header from "./components/molecule/Header";
import HeroSection from "./components/molecule/HeroSection";
import PopularCategorySection from "./components/molecule/PopularCategorySection";

const App = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
    </div>
  );
};

export default App;
