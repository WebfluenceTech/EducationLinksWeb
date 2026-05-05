import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Destinations from '../components/sections/Destinations';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import Universities from '../components/sections/Universities';
import Testimonials from '../components/sections/Testimonials';
import InquiryForm from '../components/sections/InquiryForm';
import LatestNews from '../components/sections/LatestNews';

export default function HomePage() {
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
      <LatestNews />
    </>
  );
}
