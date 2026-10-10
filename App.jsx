import useReveal from './useReveal.js';
import Cursor from './Cursor.jsx';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-ember focus:px-4 focus:py-2 focus:text-cream">Skip to content</a>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}
