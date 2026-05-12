import { Clock, Users, Compass, Trophy } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: '20+ Years of Expertise',
    description: 'Since 2009, we have been shaping futures with deep industry knowledge and proven results.',
  },
  {
    icon: Users,
    title: 'Personalized Guidance',
    description: 'Every student gets a dedicated counselor who understands their unique goals and aspirations.',
  },
  {
    icon: Compass,
    title: 'End-to-End Support',
    description: 'From university selection to visa approval and travel -- we handle every step of your journey.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '50,000+ successful students, 50+ university partners, and exceptional visa success rates.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="scroll-offset section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            ref={ref}
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students studying abroad"
                className="w-full h-56 sm:h-80 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white rounded-2xl p-5 shadow-lg hidden md:block">
              <div className="text-3xl font-bold font-heading">50K+</div>
              <div className="text-sm text-blue-100">Students Worldwide</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              title="Why Education Links?"
              subtitle="We don't just send students abroad , We build futures. Here's what sets us apart."
              centered={false}
            />
            <div className="space-y-6">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-dark">{item.title}</h3>
                    <p className="mt-1 text-sm text-brand-gray leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
