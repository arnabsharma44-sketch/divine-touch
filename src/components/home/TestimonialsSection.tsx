"use client";

import { Star } from "lucide-react";
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
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream-100">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-200 relative h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-gold-300 text-6xl font-heading absolute top-4 left-6 opacity-40">
                  &quot;
                </div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  
                  <p className="text-brown-700 italic mb-6 leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <CircularMedia 
                      label={testimonial.imageLabel} 
                      sizeClass="w-14 h-14" 
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-brown-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-brown-500 text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
