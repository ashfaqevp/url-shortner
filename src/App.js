import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoostLinkSection from "./components/BoostLinkSection";
import HeroSection from "./components/HeroSection";
import AdvancedStatisticsSection from "./components/AdvancedStatisticsSection";
import ShortenLinkSection from "./components/ShortenLinkSection";

function App() {
   return (
      <div className="App">
         <Header />
         <HeroSection />
         <ShortenLinkSection />
         <AdvancedStatisticsSection />
         <BoostLinkSection />
         <Footer />
      </div>
   );
}

export default App;
