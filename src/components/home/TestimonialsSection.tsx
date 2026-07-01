"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/shared/SectionReveal";
import CircularMedia from "@/components/shared/CircularMedia";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "The AMB 007 B is absolutely incredible. It perfectly simulates a real massage therapist. My back pain has significantly reduced since I started using it daily.",
    imageLabel: "Customer 1",
  },
  {
    name: "Anita Desai",
    location: "Delhi",
    text: "I bought the foot massager for my parents and they love it. The quality is exceptional and the customer service from Divine Touch was very helpful.",
    imageLabel: "Customer 2",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    text: "We installed two of the AM 006 B models in our office relaxation room. The team uses them constantly. Best investment we've made for employee wellness.",
    imageLabel: "Customer 3",
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    text: "I never knew I needed a massage chair until I tried one from Divine Touch. It's now my favorite part of the day. Pure bliss and total relaxation after work.",
    imageLabel: "Customer 4",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad",
    text: "The zero gravity feature is a game changer. The delivery was prompt and the installation was done professionally. Highly recommend to everyone.",
    imageLabel: "Customer 5",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="py-20 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
              What Our Clients Say
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto h-[600px] sm:h-[500px] lg:h-[450px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-cream-200 h-full flex flex-col justify-center items-center text-center">
                {/* Quote Icon */}
                <div className="text-gold-300 text-6xl font-heading absolute top-4 left-6 sm:top-8 sm:left-10 opacity-40">
                  &quot;
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  
                  <p className="text-brown-700 italic mb-8 text-lg sm:text-xl leading-relaxed max-w-2xl">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-6 mt-4">
                    <CircularMedia 
                      label={testimonials[currentIndex].imageLabel} 
                      sizeClass="w-20 h-20 sm:w-24 sm:h-24 shadow-md border-2 border-cream-200" 
                    />
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-brown-900 text-xl sm:text-2xl">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-brown-500 text-sm sm:text-base mt-1 font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 bg-white text-brown-900 p-3 rounded-full shadow-md hover:bg-gold-50 hover:text-gold-600 transition-colors z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 bg-white text-brown-900 p-3 rounded-full shadow-md hover:bg-gold-50 hover:text-gold-600 transition-colors z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-gold-500 w-8" : "bg-gold-300/50 hover:bg-gold-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
