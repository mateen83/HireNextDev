import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "HireNextDev helped us ship our product 3x faster. The developers are truly senior and understand our business needs.",
    name: "Sarah Chen",
    title: "CTO",
    company: "TechStartup Inc",
    avatar: "SC",
  },
  {
    quote: "The trial period gave us confidence to scale. We went from 1 to 4 developers in just 2 months.",
    name: "Michael Roberts",
    title: "VP Engineering",
    company: "CloudBase",
    avatar: "MR",
  },
  {
    quote: "Finally, a service that delivers on its promises. Our React developers feel like part of the team from day one.",
    name: "Emily Watson",
    title: "Engineering Manager",
    company: "DataFlow",
    avatar: "EW",
  },
  {
    quote: "The vetting process is rigorous. We've tried other services, but HireNextDev developers are in a league of their own.",
    name: "David Kim",
    title: "Head of Product",
    company: "NextGen Apps",
    avatar: "DK",
  },
  {
    quote: "Our DevOps pipelines became faster and more reliable after onboarding talent through HireNextDev.",
    name: "Alex Morgan",
    title: "DevOps Engineer",
    company: "InfraWorks",
    avatar: "AM",
  },
  {
    quote: "We hired backend engineers who immediately improved API performance and system stability.",
    name: "Priya Nair",
    title: "Backend Lead",
    company: "CoreSystems",
    avatar: "PN",
  },
  {
    quote: "The frontend developers delivered clean UI components that matched our design system perfectly.",
    name: "Lucas Turner",
    title: "Frontend Engineer",
    company: "UI Labs",
    avatar: "LT",
  },
  {
    quote: "HireNextDev provided skilled support specialists who reduced our ticket response time significantly.",
    name: "Maria Gomez",
    title: "Customer Support",
    company: "HelpDesk",
    avatar: "MG",
  },
  {
    quote: "Our QA process improved dramatically with experienced testers who understood both manual and automated testing.",
    name: "Omar Hassan",
    title: "QA Engineer",
    company: "QualityFirst",
    avatar: "OH",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What our customers are saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Join hundreds of satisfied tech leaders.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="flex flex-col h-full bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg font-medium mb-8 text-foreground flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border hover:bg-background hover:border-primary/50 transition-all flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border hover:bg-background hover:border-primary/50 transition-all flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

