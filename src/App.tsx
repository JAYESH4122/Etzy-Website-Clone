import Header from "./components/molecule/Header";
import HeroSection from "./components/molecule/HeroSection";
import PopularCategorySection from "./components/molecule/PopularCategorySection";
import GiftsSection from "./components/molecule/GiftsSection";
import SubFooter from "./components/molecule/SubFooter";
import Footer from "./components/molecule/Footer";
import BackToSchoolSection from "./components/molecule/BackToSchoolSection";
import QuestionareSection from "./components/molecule/QuestionareSection";
import FreshBlogSection from "./components/molecule/FreshBlogSection";
import DiscoverShops from "./components/molecule/DiscoverShops";
import SaveNowSection from "./components/molecule/SaveNowSection";

const App = () => {
  return (
    <div className="body-wrapper">
      <Header />
      <HeroSection />
      <PopularCategorySection />
      <GiftsSection />
      <BackToSchoolSection />
      <SaveNowSection />
      <DiscoverShops />
      <FreshBlogSection />
      <QuestionareSection />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default App;
