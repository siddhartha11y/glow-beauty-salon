"use client";

import { useInView } from "@/hooks/useInView";
import { siteConfig } from "@/lib/config";

export default function Location() {
  const { ref, inView } = useInView();

  return (
    <section id="location" className="py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 reveal ${inView ? "visible" : ""}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-rose-500 uppercase mb-4">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4 tracking-tight">
            Our Location
          </h2>
          <p className="text-warm-500 max-w-xl mx-auto text-lg font-light">
            Visit us in the heart of Mumbai. We&apos;d love to welcome you.
          </p>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-warm-100 aspect-video">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glow Beauty Salon Location"
            />
          </div>

          {/* Info Card */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="bg-white border border-warm-100 rounded-3xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-rose-500">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Address</div>
                  <p className="text-sm text-warm-700 leading-relaxed">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-warm-100 rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-rose-500">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Phone</div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-sm text-warm-700 hover:text-rose-500 transition-colors font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-warm-100 rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-rose-500">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Hours</div>
                  <p className="text-sm text-warm-700">Mon – Sat: 9 AM – 8 PM</p>
                  <p className="text-sm text-warm-700">Sunday: 10 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
