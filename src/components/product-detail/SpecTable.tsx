"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";

interface SpecTableProps {
  features?: string[];
  specifications?: string[];
}

export default function SpecTable({ features = [], specifications = [] }: SpecTableProps) {
  if (features.length === 0 && specifications.length === 0) return null;

  return (
    <div className="mt-12 space-y-10">
      {/* Key Features Section */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
          Key Features
        </h2>
        
        {features.length > 0 ? (
          <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm">
            <div className="divide-y divide-cream-200">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 hover:bg-cream-50 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-brown-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-cream-300 p-6 flex flex-col items-center justify-center text-brown-400 min-h-[160px]">
            <p className="text-sm">Key features to be added soon.</p>
          </div>
        )}
      </div>

      {/* Specifications Section */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
          Specifications
        </h2>
        
        {specifications.length > 0 ? (
          <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm">
            <div className="divide-y divide-cream-200">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 hover:bg-cream-50 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-brown-700 text-sm leading-relaxed">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-cream-300 p-6 flex flex-col items-center justify-center text-brown-400 min-h-[160px]">
            <p className="text-sm">Specifications to be added soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
