import Notice from "./Comps/NoticeSection/Notics";
import Step from "./Comps/SecondSectoin/Step";
import Navbar from "./Comps/Navigation/Navbar";
import Hero from "./Comps/Hero/Hero";
import Footer from "./Comps/Footer/Footer";
import "index.css";
import "./Sass/Custom.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Step />
      <Notice />
      <Footer />
    </>
  );
}

export default App;
