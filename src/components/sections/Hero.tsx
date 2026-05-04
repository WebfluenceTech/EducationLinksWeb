import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SLIDES = [
  {
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'University campus',
  },
  {
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Students studying abroad',
  },
  {
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'World class education',
  },
  {
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    alt: 'Graduation success',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Carousel — full background, z-0 */}
      <div className="absolute inset-0 z-0">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          transitionTime={800}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          stopOnHover={false}
          swipeable={true}
          className="h-full"
          renderArrowPrev={(clickHandler) => (
            <button
              onClick={clickHandler}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button
              onClick={clickHandler}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 text-white rounded-full p-3 transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
          renderIndicator={(clickHandler, isSelected, index) => (
            <button
              key={index}
              onClick={clickHandler}
              className={`inline-block mx-1 rounded-full transition-all duration-300 ${
                isSelected ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          )}
        >
          {SLIDES.map((slide) => (
            <div key={slide.alt} className="h-[90vh]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </Carousel>

        {/* Dark gradient covering left half */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent pointer-events-none" />
      </div>

      {/* Content — above carousel, left side, z-10 */}
      <div className="relative z-10 w-full container-custom py-24 md:py-32">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            Trusted by 50,000+ students since 2009
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your Gateway to{' '}
            <span className="text-brand-blue-light">World-Class</span>{' '}
            Education Abroad
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Pakistan's largest study abroad consultancy. Expert guidance for universities across Europe, UK, Canada, Australia, and more.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/#destinations"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Explore Destinations
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
