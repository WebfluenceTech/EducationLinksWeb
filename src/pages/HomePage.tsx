import FullPageScroll from '../components/layout/FullPageScroll';
import FullPageSection from '../components/layout/FullPageSection';
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
import OurTeam from '../components/sections/OurTeam';
import Footer from '../components/layout/Footer';

const SECTION_COUNT = 12;

export default function HomePage() {
  return (
    <FullPageScroll sectionCount={SECTION_COUNT}>
      <FullPageSection index={0}>
        <Hero />
      </FullPageSection>

      <FullPageSection index={1}>
        <StatsBar />
      </FullPageSection>

      <FullPageSection index={2}>
        <About />
      </FullPageSection>

      <FullPageSection index={3} className="fp-section--scrollable">
        <Services />
      </FullPageSection>

      <FullPageSection index={4}>
        <Destinations />
      </FullPageSection>

      <FullPageSection index={5} className="fp-section--scrollable">
        <ProcessTimeline />
      </FullPageSection>

      <FullPageSection index={6}>
        <Universities />
      </FullPageSection>

      <FullPageSection index={7}>
        <OurTeam />
      </FullPageSection>

      <FullPageSection index={8}>
        <Testimonials />
      </FullPageSection>

      <FullPageSection index={9} className="fp-section--scrollable">
        <InquiryForm />
      </FullPageSection>

      <FullPageSection index={10} className="fp-section--scrollable">
        <LatestNews />
      </FullPageSection>

      <FullPageSection index={11} className="fp-section--dark fp-section--scrollable">
        <Footer />
      </FullPageSection>
    </FullPageScroll>
  );
}
