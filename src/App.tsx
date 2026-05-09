/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Blog from './components/Blog';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
