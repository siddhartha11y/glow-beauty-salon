// ─────────────────────────────────────────────
//  GLOW BEAUTY SALON — SITE CONFIGURATION
//  Edit this file to update all content on the site.
// ─────────────────────────────────────────────

export const siteConfig = {
  // ── Business Info ──────────────────────────
  name: "Glow Beauty Salon",
  tagline: "Look Good, Feel Confident",
  location: "Andheri West, Mumbai, Maharashtra 400053",
  phone: "+91 7208390226",
  phoneRaw: "7208390226",

  // ── SEO ────────────────────────────────────
  seo: {
    title: "Glow Beauty Salon — Mumbai | Hair, Skin & Makeup Experts",
    description:
      "Premium beauty services in Mumbai. Haircuts, Facials, Bridal Makeup & Hair Spa. Book your appointment on WhatsApp.",
    ogImage: "/og-image.png",
  },

  // ── Navigation ─────────────────────────────
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Services ────────────────────────────────
  services: [
    {
      id: "haircut",
      icon: "scissors",
      title: "Haircut & Styling",
      description:
        "Expert cuts tailored to your face shape and lifestyle. From classic to contemporary.",
    },
    {
      id: "facial",
      icon: "sparkles",
      title: "Facial & Skincare",
      description:
        "Deep cleansing facials, brightening treatments, and anti-ageing therapies for radiant skin.",
    },
    {
      id: "makeup",
      icon: "wand",
      title: "Makeup & Bridal",
      description:
        "Flawless everyday looks to full bridal packages — we make every occasion memorable.",
    },
    {
      id: "hairspa",
      icon: "leaf",
      title: "Hair Spa",
      description:
        "Nourishing spa treatments to repair, strengthen and restore shine to your hair.",
    },
  ],

  // ── Gallery ─────────────────────────────────
  gallery: [
    { src: "/gallery/g1.png", alt: "Luxury salon interior" },
    { src: "/gallery/g2.png", alt: "Professional hair styling" },
    { src: "/gallery/g3.png", alt: "Glowing facial treatment" },
    { src: "/gallery/g4.png", alt: "Bridal makeup session" },
    { src: "/gallery/g5.png", alt: "Hair spa treatment" },
    { src: "/gallery/g6.png", alt: "Premium haircut result" },
  ],

  // ── Reviews ─────────────────────────────────
  reviews: [
    {
      name: "Priya Sharma",
      role: "Bride, Wedding 2025",
      avatar: "PS",
      rating: 5,
      text: "My bridal makeup was absolutely stunning. The team understood my vision perfectly and I felt like royalty on my special day. Highly recommend Glow!",
    },
    {
      name: "Ananya Desai",
      role: "Regular Client",
      rating: 5,
      avatar: "AD",
      text: "I come here every month for my facial and hair treatment. The quality is consistently excellent and the ambience is so relaxing. Best salon in Mumbai!",
    },
    {
      name: "Meera Nair",
      role: "First-Time Visitor",
      rating: 5,
      avatar: "MN",
      text: "Visited for a haircut and hair spa combo. The stylist gave me exactly what I asked for. The salon is premium, hygienic, and the staff is incredibly warm.",
    },
  ],

  // ── Location / Map ──────────────────────────
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60336.66928296203!2d72.80531114179688!3d19.119138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // ── CTA ─────────────────────────────────────
  cta: {
    headline: "Ready for a transformation?",
    subtext: "Book your appointment today — it only takes a message.",
    whatsappMessage:
      "Hi! I'd like to book an appointment at Glow Beauty Salon.",
  },
};

export type SiteConfig = typeof siteConfig;
