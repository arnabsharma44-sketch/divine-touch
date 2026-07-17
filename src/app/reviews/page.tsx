"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/shared/SectionReveal";

import Stack from "@/components/shared/Stack";

const initialReviews = [
  { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", name: "Priya Sharma", location: "Pune", text: "I never knew I needed a massage chair until I tried one from Divine Touch. It's now my favorite part of the day. Pure bliss and total relaxation after work." },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80", name: "Rajesh Kumar", location: "Mumbai", text: "The AM 006 B has completely transformed my evenings. The 3D massage rollers are incredibly precise and relieve all my back tension." },
  { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", name: "Anita Desai", location: "Delhi", text: "I bought the foot massager for my parents and they love it. The quality is exceptional and the customer service from Divine Touch was very helpful." },
  { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", name: "Vikram Singh", location: "Bangalore", text: "We installed two models in our office relaxation room. Best investment we've made for employee wellness." },
  { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80", name: "Arjun Reddy", location: "Hyderabad", text: "The zero gravity feature is a game changer. The delivery was prompt and the installation was done professionally. Highly recommend to everyone." },
];

export default function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", location: "", text: "", image: "" });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviewsList([
        {
          image: newReview.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
          name: newReview.name,
          location: newReview.location || "Anonymous",
          text: newReview.text,
        },
        ...reviewsList
      ]);
      setNewReview({ name: "", location: "", text: "", image: "" });
      setShowForm(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be under 5 MB.");
        return;
      }
      if (newReview.image) {
        URL.revokeObjectURL(newReview.image);
      }
      const imageUrl = URL.createObjectURL(file);
      setNewReview({ ...newReview, image: imageUrl });
    }
  };

  const cards = reviewsList.map((review, i) => (
    <div key={i} className="w-full h-full bg-white rounded-3xl shadow-xl shadow-brown-900/10 border-2 border-cream-100 flex flex-col sm:flex-row overflow-hidden group">
      {/* Image Section - Top on mobile, Left on desktop */}
      <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative overflow-hidden shrink-0">
        <Image
          src={review.image}
          alt={review.name}
          fill
          sizes="(max-width: 640px) 100vw, 40vw"
          unoptimized={review.image.startsWith("blob:")}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 sm:hidden" />
      </div>

      {/* Text Section - Bottom on mobile, Right on desktop */}
      <div className="w-full sm:w-[60%] p-6 sm:p-8 md:p-10 flex flex-col justify-center relative bg-white h-full">
        {/* Quote Icon */}
        <div className="text-gold-200 text-6xl md:text-7xl font-heading absolute top-4 right-4 md:top-6 md:right-6 leading-none opacity-50 select-none">
          &quot;
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-gold-500 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ))}
          </div>
          
          <p className="text-brown-700 italic mb-6 text-base sm:text-lg leading-relaxed font-light overflow-y-auto">
            "{review.text}"
          </p>
          
          <div className="mt-auto pt-4 border-t border-cream-200">
            <h4 className="font-heading font-bold text-brown-900 text-lg sm:text-xl">
              {review.name}
            </h4>
            <p className="text-gold-600 text-xs sm:text-sm mt-1 font-medium tracking-wide uppercase">
              {review.location}
            </p>
          </div>
        </div>
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
            pauseOnHover={false}
          />
        </div>
      </div>

      {/* Add Review Form */}
      <div className="pb-20 flex flex-col items-center relative z-20">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-gold-500 text-white px-6 py-3 rounded-full font-medium hover:bg-gold-600 transition-colors shadow-md"
          >
            Add Your Review
          </button>
        ) : (
          <form onSubmit={handleAddReview} className="bg-cream-50 p-6 rounded-2xl shadow-lg w-full max-w-md border border-cream-200">
            <h3 className="font-heading text-xl text-brown-900 font-bold mb-4 text-center">Write a Review</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={newReview.name}
              onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              className="w-full mb-3 px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white text-brown-900 placeholder:text-brown-400"
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={newReview.location}
              onChange={(e) => setNewReview({...newReview, location: e.target.value})}
              className="w-full mb-3 px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white text-brown-900 placeholder:text-brown-400"
            />
            <div className="mb-3 text-left">
              <label className="block text-sm font-medium text-brown-700 mb-1 ml-1">Add a Photo (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-brown-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold-50 file:text-gold-700 hover:file:bg-gold-100"
              />
              {newReview.image && (
                <div className="mt-2 flex justify-center">
                  <img src={newReview.image} alt="Preview" className="w-16 h-16 object-cover rounded-full border-2 border-gold-300" />
                </div>
              )}
            </div>
            <textarea
              placeholder="Your Review"
              required
              rows={3}
              value={newReview.text}
              onChange={(e) => setNewReview({...newReview, text: e.target.value})}
              className="w-full mb-4 px-4 py-2 border border-cream-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none bg-white text-brown-900 placeholder:text-brown-400"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-cream-200 text-brown-600 px-4 py-2 rounded-lg font-medium hover:bg-cream-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gold-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
