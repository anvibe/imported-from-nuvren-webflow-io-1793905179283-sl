import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Studio from "./components/Studio";
import Services from "./components/Services";
import Process from "./components/Process";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Work />
        <Studio />
        <Services />
        <Process />
        <Notes />
      </main>
      <Footer />
    </div>
  );
}
