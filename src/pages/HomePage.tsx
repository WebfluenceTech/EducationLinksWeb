import FullPageScroll from '../components/layout/FullPageScroll';
import FullPageSection from '../components/layout/FullPageSection';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Destinations from '../components/sections/Destinations';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import Universities from '../components/sections/Universities';
import TeamCEO from '../components/sections/TeamCEO';
import TeamManagers from '../components/sections/TeamManagers';
import TeamSenior from '../components/sections/TeamSenior';
import TeamCounsellers from '../components/sections/TeamCounsellers';
import Testimonials from '../components/sections/Testimonials';
import InquiryForm from '../components/sections/InquiryForm';
import LatestNews from '../components/sections/LatestNews';
import Footer from '../components/layout/Footer';

const SECTION_COUNT = 15;

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

      <FullPageSection index={3}>
        <Services />
      </FullPageSection>

      <FullPageSection index={4}>
        <Destinations />
      </FullPageSection>

      <FullPageSection index={5}>
        <ProcessTimeline />
      </FullPageSection>

      <FullPageSection index={6}>
        <Universities />
      </FullPageSection>

      <FullPageSection index={7}>
        <TeamCEO />
      </FullPageSection>

      <FullPageSection index={8}>
        <TeamManagers />
      </FullPageSection>

      <FullPageSection index={9}>
        <TeamSenior />
      </FullPageSection>

      <FullPageSection index={10}>
        <TeamCounsellers />
      </FullPageSection>

      <FullPageSection index={11}>
        <Testimonials />
      </FullPageSection>

      <FullPageSection index={12} className="fp-section--scrollable">
        <InquiryForm />
      </FullPageSection>

      <FullPageSection index={13} className="fp-section--scrollable">
        <LatestNews />
      </FullPageSection>

      <FullPageSection index={14} className="fp-section--dark fp-section--scrollable">
        <Footer />
      </FullPageSection>
    </FullPageScroll>
  );
}
