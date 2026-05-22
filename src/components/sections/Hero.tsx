import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

function goToDestinations() {
  window.dispatchEvent(new CustomEvent('fp:goto', { detail: { id: 'destinations' } }));
}
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
    <section className="relative h-full min-h-screen w-full flex items-center overflow-hidden">

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
              className="absolute left-2 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button
              onClick={clickHandler}
              className="absolute right-2 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/30 text-white rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          renderIndicator={(clickHandler, isSelected, index) => (
            <button
              key={index}
              onClick={clickHandler}
              className={`inline-block mx-1 rounded-full transition-all duration-300 ${isSelected ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          )}
        >
          {SLIDES.map((slide) => (
            <div key={slide.alt} className="h-full">
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

      {/* Content — above carousel, z-10 */}
      {/* px-14 on mobile keeps text clear of the carousel arrow buttons (which sit at left-4/right-4 ~48px wide) */}
      <div className="relative z-10 w-full px-14 sm:px-8 md:px-0 md:container-custom py-16 md:py-32">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-2 rounded-full mb-4">
            {/* <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse shrink-0" /> */}
            Trusted by 6,000+ students since 2009
          </div>

          <h1 className="font-script tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Your Gateway to{' '}
            <span className="text-brand-blue-light">World-Class</span>{' '}
            Education Abroad
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed">
            Pakistan's largest study abroad consultancy. Expert guidance for universities across Europe, UK, Canada, Australia, and more.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-3">
            <button
              onClick={goToDestinations}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/30 text-sm"
            >
              Explore Destinations
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-5 py-3 rounded-xl transition-all hover:bg-white/10 text-sm"
            >
              <PlayCircle className="h-4 w-4" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
