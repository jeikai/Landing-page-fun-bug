import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 650, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="min-h-screen text-[#141414]">
      <Header />
      <main className="pt-7 md:pt-8">
        <Hero />
        <Services />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
