"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/lib/config";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "fill-amber-400" : "fill-warm-200"}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${inView ? "visible" : ""}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 uppercase mb-4">
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto text-lg font-light">
            Real experiences from our happy, glowing clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review, i) => (
            <div
              key={review.name}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
              }}
            >
              <div className="h-full bg-warm-50 border border-warm-100 rounded-3xl p-8 flex flex-col gap-5 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Quote */}
                <blockquote className="text-warm-700 leading-relaxed font-light flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-2 border-t border-warm-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-warm-900">{review.name}</div>
                    <div className="text-xs text-warm-400">{review.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
