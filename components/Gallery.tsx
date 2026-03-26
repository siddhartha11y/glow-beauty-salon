"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/lib/config";

export default function Gallery() {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${inView ? "visible" : ""}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4 tracking-tight">
            Beauty Gallery
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto text-lg font-light">
            A glimpse of the transformations we've created for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {siteConfig.gallery.map((image, i) => (
            <div
              key={image.src}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-square group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
