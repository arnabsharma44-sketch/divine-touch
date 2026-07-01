"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/shared/SectionReveal";

import Stack from "@/components/shared/Stack";

const reviews = [
  { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", name: "Priya Sharma", location: "Pune", text: "I never knew I needed a massage chair until I tried one from Divine Touch. It's now my favorite part of the day. Pure bliss and total relaxation after work." },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80", name: "Rajesh Kumar", location: "Mumbai", text: "The AM 006 B has completely transformed my evenings. The 3D massage rollers are incredibly precise and relieve all my back tension." },
  { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", name: "Anita Desai", location: "Delhi", text: "I bought the foot massager for my parents and they love it. The quality is exceptional and the customer service from Divine Touch was very helpful." },
  { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", name: "Vikram Singh", location: "Bangalore", text: "We installed two models in our office relaxation room. Best investment we've made for employee wellness." },
  { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80", name: "Arjun Reddy", location: "Hyderabad", text: "The zero gravity feature is a game changer. The delivery was prompt and the installation was done professionally. Highly recommend to everyone." },
];

export default function ReviewsPage() {
  const cards = reviews.map((review, i) => (
    <div key={i} className="w-full h-full bg-cream-50 rounded-[2rem] p-8 shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center relative overflow-hidden group">
      {/* Background Image with blur */}
      <div 
        className="absolute inset-0 z-0 opacity-20 blur-md transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${review.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50/80 to-cream-100/95 z-0" />
      
      <div className="relative z-10 flex flex-col items-center max-w-lg">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gold-500 shadow-xl mb-6"
        />
        <div className="text-gold-500 text-5xl font-heading mb-4 leading-none opacity-40">"</div>
        <p className="text-brown-900 text-xl md:text-2xl italic font-medium mb-8 leading-relaxed">
          {review.text}
        </p>
        <h3 className="text-2xl font-heading font-bold text-brown-900">{review.name}</h3>
        <p className="text-gold-600 font-medium tracking-wide uppercase text-sm mt-2">{review.location}</p>
      </div>
    </div>
  ));

  return (
    <div className="bg-brown-900 min-h-screen pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <SectionReveal>
          <span className="text-gold-400 font-medium text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 mt-4 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-brown-200 max-w-2xl mx-auto">
            Swipe or drag the cards below to read what our satisfied customers have to say about the Divine Touch experience.
          </p>
        </SectionReveal>
      </div>

      <div className="flex justify-center items-center h-[600px] w-full px-4">
        <div className="w-full max-w-2xl h-[500px]">
          <Stack
            cards={cards}
            randomRotation={true}
            sensitivity={150}
            sendToBackOnClick={true}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}
