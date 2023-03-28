import Navbar from "./components/Navbar";
import AboutMe from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
