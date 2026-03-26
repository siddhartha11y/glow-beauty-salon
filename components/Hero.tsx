"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const waLink = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    siteConfig.cta.whatsappMessage
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-orange-50" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-100/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pill badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/80 border border-rose-200 text-rose-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-sm transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          Premium Beauty Studio · Mumbai
        </div>

        {/* Headline */}
        <h1
          className={`font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-warm-900 mb-6 transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {siteConfig.name.split(" ").map((word, i) => (
            <span key={i} className={i === 0 ? "text-rose-500" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-warm-500 font-light tracking-wide mb-12 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {siteConfig.tagline}
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={waLink}
            id="hero-whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full text-base shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-1 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book on WhatsApp
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            id="hero-call-cta"
            className="inline-flex items-center gap-3 bg-white hover:bg-warm-50 text-warm-800 font-semibold px-8 py-4 rounded-full text-base border border-warm-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-20 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-warm-400 tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-warm-300 to-transparent" />
        </div>
      </div>

      {/* Floating stat badges */}
      <div
        className={`absolute bottom-12 left-8 hidden lg:flex flex-col gap-3 transition-all duration-700 delay-700 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        {[
          { value: "500+", label: "Happy Clients" },
          { value: "5★", label: "Google Rating" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/80 backdrop-blur-sm border border-warm-100 rounded-2xl px-4 py-3 shadow-sm">
            <div className="text-xl font-bold text-rose-500">{stat.value}</div>
            <div className="text-xs text-warm-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div
        className={`absolute bottom-12 right-8 hidden lg:flex flex-col gap-3 transition-all duration-700 delay-700 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        {[
          { value: "10+", label: "Years Experience" },
          { value: "4", label: "Expert Services" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/80 backdrop-blur-sm border border-warm-100 rounded-2xl px-4 py-3 shadow-sm">
            <div className="text-xl font-bold text-rose-500">{stat.value}</div>
            <div className="text-xs text-warm-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
