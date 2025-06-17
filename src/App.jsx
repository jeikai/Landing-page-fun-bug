import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; // THÊM import này

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />

      {/* Optional: CSS animation nếu cần dùng inline */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  )
}

export default App;
