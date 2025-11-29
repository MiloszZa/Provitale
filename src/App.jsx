import Navigation from "./components/Layout/Navigation";
import Hero from "./components/Sections/Hero";
import Features from "./components/Sections/Features";
import Testimonial from "./components/Sections/Testimonial";
import BlogPreview from "./components/Sections/BlogPreview";
import Footer from "./components/Layout/Footer";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Pricing from "./components/Sections/Pricing";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Navigation />
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contact />
        <BlogPreview />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
