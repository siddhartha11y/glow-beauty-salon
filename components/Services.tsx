"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/lib/config";

const icons: Record<string, React.ReactElement> = {
  scissors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M6 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  wand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.375 3.375 0 013.375 17.625v0a3.375 3.375 0 016.75 0v0A3.375 3.375 0 016.75 21zM19.5 4.5l-15 15M6.75 6.75L9 9M12 3l-1.5 1.5M16.5 7.5l1.5-1.5M3 12l1.5-1.5M19.5 16.5L21 15M12 21l1.5-1.5" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path d="M12 21.75C5.25 21.75 2.25 15 2.25 9.375a9.75 9.75 0 0119.5 0C21.75 15 18.75 21.75 12 21.75z" />
      <path d="M12 21.75V12.375" />
      <path d="M12 12.375C12 9.375 14.25 6.375 17.25 5.625" />
    </svg>
  ),
};

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${inView ? "visible" : ""}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto text-lg font-light">
            Expert care designed to bring your best self forward — every visit.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
  inView,
}: {
  service: (typeof siteConfig.services)[number];
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      className="reveal group"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div className="h-full bg-warm-50 border border-warm-100 rounded-3xl p-8 flex flex-col gap-5 group-hover:border-rose-200 group-hover:bg-rose-50/30 group-hover:shadow-xl group-hover:shadow-rose-100 group-hover:-translate-y-1 transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-white border border-rose-100 shadow-sm flex items-center justify-center text-rose-400 group-hover:text-rose-500 group-hover:border-rose-200 group-hover:shadow-md transition-all duration-300">
          {icons[service.icon]}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-warm-900 mb-2">{service.title}</h3>
          <p className="text-sm text-warm-500 leading-relaxed font-light">{service.description}</p>
        </div>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 group-hover:gap-2 transition-all">
            Learn more
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
