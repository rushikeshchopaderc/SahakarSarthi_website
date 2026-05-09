import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Gallery />
      <Team />
      <Contact />
    </>
  );
}
