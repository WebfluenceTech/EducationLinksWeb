import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Destinations from '../components/sections/Destinations';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import Universities from '../components/sections/Universities';
import Testimonials from '../components/sections/Testimonials';
import InquiryForm from '../components/sections/InquiryForm';
import FindUs from '../components/sections/FindUs';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Destinations />
      <ProcessTimeline />
      <Universities />
      <Testimonials />
      <InquiryForm />
      <FindUs />
    </>
  );
}
