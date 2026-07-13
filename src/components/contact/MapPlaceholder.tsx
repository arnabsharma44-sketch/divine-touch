"use client";

import React from "react";

export default function MapPlaceholder() {
  return (
    <div className="w-full h-full min-h-[350px] bg-cream-100 rounded-2xl border border-gold-300 overflow-hidden relative shadow-inner">
      <iframe 
        src="https://maps.google.com/maps?q=Divine%20Touch%20Massage%20Chairs,%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: "350px" }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Divine Touch Store Location"
        className="absolute inset-0"
      ></iframe>
    </div>
  );
}
