"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/shared/SectionReveal";

const initialTestimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "The AMB 007 B is absolutely incredible. It perfectly simulates a real massage therapist. My back pain has significantly reduced since I started using it daily.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    name: "Anita Desai",
    location: "Delhi",
    text: "I bought the foot massager for my parents and they love it. The quality is exceptional and the customer service from Divine Touch was very helpful.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    text: "We installed two of the AM 006 B models in our office relaxation room. The team uses them constantly. Best investment we've made for employee wellness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Priya Sharma",
    location: "Pune",
    text: "I never knew I needed a massage chair until I tried one from Divine Touch. It's now my favorite part of the day. Pure bliss and total relaxation after work.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad",
    text: "The zero gravity feature is a game changer. The delivery was prompt and the installation was done professionally. Highly recommend to everyone.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
];

export default function TestimonialsSection() {
  const [testimonialsList, setTestimonialsList] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", location: "", text: "", image: "" });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setTestimonialsList([...testimonialsList, {
        name: newReview.name,
        location: newReview.location || "Anonymous",
        text: newReview.text,
        image: newReview.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", // generic fallback
      }]);
      setNewReview({ name: "", location: "", text: "", image: "" });
      setShowForm(false);
      setDirection(1);
      setCurrentIndex(testimonialsList.length);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setNewReview({ ...newReview, image: imageUrl });
    }
  };

  useEffect(() => {
    if (showForm) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, showForm, testimonialsList.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsList.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 800 : -800,
        opacity: 0,
        scale: 0.9,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 800 : -800,
        opacity: 0,
        scale: 0.9,
      };
    },
  };

  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Authentic Stories
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brown-900 mt-2 mb-4">
              Loved by Our Community
            </h2>
            <p className="text-brown-500 max-w-2xl mx-auto">
              Real experiences from people who have transformed their daily lives with Divine Touch wellness products.
            </p>
          </div>
        </SectionReveal>

        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[480px]">
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
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white rounded-3xl shadow-xl shadow-brown-900/5 border border-cream-200 h-full flex flex-col md:flex-row overflow-hidden group">
                
                {/* Image Section - Left on Desktop, Top on Mobile */}
                <div className="w-full md:w-[40%] h-[250px] md:h-full relative overflow-hidden shrink-0">
                  <img
                    src={testimonialsList[currentIndex].image}
                    alt={testimonialsList[currentIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 md:hidden" />
                </div>

                {/* Text Section - Right on Desktop, Bottom on Mobile */}
                <div className="w-full md:w-[60%] p-8 sm:p-10 md:p-12 flex flex-col justify-center relative bg-white">
                  {/* Quote Icon */}
                  <div className="text-gold-200 text-6xl md:text-8xl font-heading absolute top-4 right-6 md:top-6 md:right-8 leading-none opacity-50 select-none">
                    &quot;
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    
                    <p className="text-brown-700 italic mb-8 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
                      "{testimonialsList[currentIndex].text}"
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-cream-200">
                      <h4 className="font-heading font-bold text-brown-900 text-xl sm:text-2xl">
                        {testimonialsList[currentIndex].name}
                      </h4>
                      <p className="text-gold-600 text-sm sm:text-base mt-1 font-medium tracking-wide uppercase">
                        {testimonialsList[currentIndex].location}
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
            className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur text-brown-900 p-3 sm:p-4 rounded-full shadow-lg hover:bg-gold-50 hover:text-gold-600 transition-all z-20 border border-cream-100 hover:scale-105"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur text-brown-900 p-3 sm:p-4 rounded-full shadow-lg hover:bg-gold-50 hover:text-gold-600 transition-all z-20 border border-cream-100 hover:scale-105"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10 md:mt-12 flex-wrap">
          {testimonialsList.map((_, idx) => (
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

        {/* Add Review Form */}
        <div className="mt-16 flex flex-col items-center relative z-20">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-brown-900 text-cream-50 px-8 py-3.5 rounded-full font-medium hover:bg-gold-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
            >
              Share Your Experience
            </button>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleAddReview} 
              className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg border border-cream-200"
            >
              <h3 className="font-heading text-2xl text-brown-900 font-bold mb-6 text-center">Write a Review</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-5 py-3 border border-cream-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-brown-900 placeholder:text-brown-400 transition-shadow"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    value={newReview.location}
                    onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                    className="w-full px-5 py-3 border border-cream-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50 text-brown-900 placeholder:text-brown-400 transition-shadow"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-700 mb-2 ml-1">Add a Portrait Photo (optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-brown-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold-50 file:text-gold-700 hover:file:bg-gold-100 cursor-pointer"
                  />
                  {newReview.image && (
                    <div className="mt-4 flex justify-center">
                      <img src={newReview.image} alt="Preview" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl border-4 border-gold-200 shadow-md" />
                    </div>
                  )}
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Experience"
                    required
                    rows={4}
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                    className="w-full px-5 py-3 border border-cream-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none bg-cream-50 text-brown-900 placeholder:text-brown-400 transition-shadow"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-cream-100 text-brown-700 px-6 py-3 rounded-xl font-semibold hover:bg-cream-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gold-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gold-600 transition-colors shadow-md hover:shadow-lg"
                >
                  Post Review
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
