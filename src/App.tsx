import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Snowflake, 
  ArrowRight,
  Info,
  Droplets,
  Layers,
  Leaf
} from 'lucide-react';

interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bgGradient: string;
  accentColor: string;
  bgTitle: string;
  textColor: string;
  highlights: string[];
  komposisi: string;
}

const FLAVORS: Flavor[] = [
  {
    id: 'strawberry',
    name: 'Es Lumut Strawberry',
    tagline: 'Sensasi Manis Segar Buah Stroberi Asli',
    description: 'Paduan susu creamy lembut beraroma stroberi segar dengan serutan jeli lumut kenyal yang lumer di mulut. Dingin, lembut, dan menyegarkan.',
    image: 'image/es-lumut-strawberry.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(244, 63, 94, 0.45) 0%, rgba(251, 113, 133, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#f43f5e',
    bgTitle: 'STRAWBERRY',
    textColor: 'text-rose-300',
    highlights: ['Susu Murni Pilihan', 'Ekstrak Stroberi Alami', 'Jeli Lumut Lembut'],
    komposisi: 'Susu murni, krimer nabati, ekstrak stroberi alami, agar-agar lumut rumput laut, gula murni, es kristal.'
  },
  {
    id: 'mangga',
    name: 'Es Lumut Mangga',
    tagline: 'Aroma Harum Tropis Mangga Manalagi',
    description: 'Rasa mangga tropis harum legit dipadukan dengan lumut jeli pandan hijau dan kuah susu kental manis yang gurih menyegarkan di setiap tegukan.',
    image: 'image/es-lumut-mangga.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.45) 0%, rgba(251, 191, 36, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#f59e0b',
    bgTitle: 'MANGO',
    textColor: 'text-amber-300',
    highlights: ['Sari Mangga Tropis', 'Jeli Lumut Pandan Wangi', 'Rasa Manis Alami'],
    komposisi: 'Susu kental manis gurih, sari buah mangga pilihan, jeli lumut suji pandan, krimer lembut, es kristal.'
  },
  {
    id: 'melon',
    name: 'Es Lumut Melon',
    tagline: 'Kesegaran Sejuk Honeydew Alami',
    description: 'Wangi semerbak melon manis dengan serutan jeli lumut hijau zamrud berpadu kuah susu creamy lembut yang menyejukkan dahaga seketika.',
    image: 'image/es-lumut-melon.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.45) 0%, rgba(52, 211, 153, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#10b981',
    bgTitle: 'HONEYDEW',
    textColor: 'text-emerald-300',
    highlights: ['Melon Honeydew Segar', 'Jeli Lumut Sutra Hijau', 'Dingin Sejuk Alami'],
    komposisi: 'Susu cair segar, ekstrak melon honeydew murni, serutan jeli lumut hijau, gula tebu asli, es kristal.'
  },
  {
    id: 'blueberry',
    name: 'Es Lumut Blueberry',
    tagline: 'Asam Manis Bold Buah Blueberry Segar',
    description: 'Kombinasi berry ungu berpadu susu dingin dengan tekstur lumut jeli sutra kaya antioksidan. Menghadirkan rasa manis asam unik yang mewah.',
    image: 'image/es-lumut-blueberry.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.45) 0%, rgba(139, 92, 246, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#6366f1',
    bgTitle: 'BLUEBERRY',
    textColor: 'text-indigo-300',
    highlights: ['Blueberry Pilihan', 'Kaya Antioksidan Alami', 'Tekstur Jeli Lembut'],
    komposisi: 'Susu creamy racikan, ekstrak buah blueberry ungu, serutan jeli lumut, gula murni, es kristal higienis.'
  },
  {
    id: 'kopi',
    name: 'Es Lumut Kopi',
    tagline: 'Tendangan Kopi Susu Creamy dengan Jeli Kopi',
    description: 'Kopi susu racikan khas berpadu serutan jeli lumut kopi kenyal. Sensasi perpaduan kopi harum dan susu gurih yang mantap dan melegakan dahaga.',
    image: 'image/es-lumut-kopi.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(180, 83, 9, 0.45) 0%, rgba(217, 119, 6, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#d97706',
    bgTitle: 'COFFEE',
    textColor: 'text-amber-400',
    highlights: ['Seduhan Biji Kopi Harum', 'Jeli Lumut Kopi Kenyal', 'Kuah Susu Gurih'],
    komposisi: 'Seduhan kopi pilihan nusantara, susu kental manis, serutan jeli lumut kopi hitam, gula aren murni, es kristal.'
  },
  {
    id: 'anggur',
    name: 'Es Lumut Anggur',
    tagline: 'Rasa Mewah Anggur Ungu Merona',
    description: 'Manis buah anggur ungu pekat berbaur dengan susu creamy gurih dan serutan jeli lumut sutra lembut. Dingin menyegarkan lidah dan tenggorokan.',
    image: 'image/es-lumut-anggur.jpeg',
    bgGradient: 'radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.45) 0%, rgba(192, 132, 252, 0.25) 45%, rgba(15, 23, 42, 0.95) 100%)',
    accentColor: '#a855f7',
    bgTitle: 'PURPLE GRAPE',
    textColor: 'text-purple-300',
    highlights: ['Sari Anggur Ungu Pekat', 'Jeli Lumut Kenyal Sutra', 'Warna Alami Segar'],
    komposisi: 'Susu murni, sari anggur merah-ungu pilihan, jeli lumut rumput laut, krimer gurih, es kristal higienis.'
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentFlavor = FLAVORS[activeIndex];

  const goToSlide = (index: number) => {
    const newIdx = (index + FLAVORS.length) % FLAVORS.length;
    setActiveIndex(newIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(activeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToSlide(activeIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      goToSlide(activeIndex + 1);
    } else if (distance < -50) {
      goToSlide(activeIndex - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative min-h-screen text-slate-100 transition-all duration-700 ease-out overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]"
      style={{
        background: currentFlavor.bgGradient,
        backgroundColor: '#090d16'
      }}
    >
      {/* Dynamic Ambient Blur Orbs */}
      <div 
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px] pointer-events-none opacity-40 transition-all duration-1000 -z-10 animate-pulse-glow"
        style={{ backgroundColor: currentFlavor.accentColor }}
      />
      <div 
        className="fixed bottom-10 right-10 w-80 h-80 rounded-full filter blur-[100px] pointer-events-none opacity-20 transition-all duration-1000 -z-10"
        style={{ backgroundColor: '#ffffff' }}
      />

      {/* 1. FLOATING GLASS NAVBAR (HANYA LOGO JUNI DAN NAVIGASI HALAMAN) */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="glass-card rounded-2xl px-6 py-3 md:py-3.5 flex items-center justify-between shadow-2xl transition-all duration-300">
          {/* Logo JUNI */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/25 border border-white/40 flex items-center justify-center font-black text-xl text-white tracking-wider shadow-inner group-hover:scale-105 transition-transform font-['Outfit']">
              J
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white font-['Outfit']">JUNI</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-white/20 border border-white/30 text-white/90">
                  Es Lumut
                </span>
              </div>
              <p className="text-[10px] text-white/70 tracking-wide font-medium">Katalog Visual Homemade</p>
            </div>
          </a>

          {/* Menu Navigasi Halaman ("Beranda", "Showcase Rasa", "Keunggulan") */}
          <div className="flex items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/80">
            <a href="#hero" className="hover:text-white transition-colors">Beranda</a>
            <a href="#showcase" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>Showcase Rasa</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentFlavor.accentColor }}></span>
            </a>
            <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a>
          </div>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8">
        {/* Mandatory Hero Image Tag: src="hero-bg.jpg" */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <img 
            src="image/hero-bg.jpeg" 
            alt="Hero Latar Utama Es Lumut JUNI" 
            className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105 transform motion-safe:animate-subtle-float"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/75 to-slate-950" />
        </div>

        {/* Center Floating Glass Hero Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-14 max-w-3xl w-full text-center shadow-2xl relative border-white/30 transition-transform duration-500 hover:border-white/40">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-semibold tracking-wider uppercase mb-6 text-white shadow-sm">
            <Sparkles size={14} className="text-amber-300" />
            <span>Katalog Galeri Visual · 100% Homemade</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight font-['Outfit']">
            Ceriakan Harimu bersama{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-amber-200 to-emerald-300">
              Es Lumut JUNI!
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Galeri visual kelezatan es lumut susu homemade dengan serutan jeli lembut berpadu kuah susu kental manis yang gurih dan buah asli pilihan tanpa pemanis buatan.
          </p>

          {/* Navigation Button */}
          <div className="flex items-center justify-center">
            <a
              href="#showcase"
              className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Lihat Galeri 6 Varian Rasa</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Product Info Bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/75">
            <span>100% Gula Murni Asli</span>
            <span className="text-white/30">·</span>
            <span>Jeli Sutra Rumput Laut Homemade</span>
            <span className="text-white/30">·</span>
            <span>Tanpa Pengawet Sintetis</span>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE PRODUK (SCROLL-DRIVEN HORIZONTAL CAROUSEL - WIX STYLE) */}
      <section 
        id="showcase" 
        className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center select-none"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-white/70 mb-2">
            <Snowflake size={14} className="text-cyan-400" />
            <span>Galeri Visual Varian</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Koleksi Varian Es Lumut JUNI
          </h2>
          <p className="text-sm md:text-base text-white/75 mt-2 max-w-xl mx-auto">
            Geser horizontal untuk mengeksplorasi tampilan visual botol dan karakteristik rasa dari setiap varian.
          </p>
        </div>

        {/* Flavor Selector Tabs */}
        <div className="flex items-center justify-center overflow-x-auto no-scrollbar gap-2 mb-8 px-2 py-1">
          {FLAVORS.map((flavor, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={flavor.id}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xl scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 border border-white/20'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: flavor.accentColor }}
                />
                <span>{flavor.name.replace('Es Lumut ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Wix-Style Hero Display: Central Product Bottle with Giant Typography & Glassmorphic Info Card */}
        <div className="relative w-full rounded-3xl overflow-hidden glass-card p-6 md:p-12 shadow-2xl border-white/30">
          {/* Giant Typographic Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
            <span className="text-[14vw] font-black tracking-tighter text-white/5 uppercase transform transition-all duration-700 ease-out font-['Outfit']">
              {currentFlavor.bgTitle}
            </span>
          </div>

          {/* Carousel Slide Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Image Showcase with Mandatory <img> Tag */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              {/* Dynamic Glow Behind the Bottle */}
              <div 
                className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full filter blur-[70px] opacity-60 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: currentFlavor.accentColor }}
              />

              {/* Bottle Card Wrapper */}
              <div className="relative w-64 h-[380px] sm:w-72 sm:h-[440px] md:w-80 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/40 bg-white/10 backdrop-blur-xs transition-transform duration-500 hover:scale-102">
                {/* Mandatory <img> tags for the 6 products */}
                {FLAVORS.map((flavor, idx) => (
                  <div 
                    key={flavor.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === activeIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'
                    }`}
                  >
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}

                {/* Glassmorphic Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/25 pointer-events-none z-20" />

                {/* Tag "100% Homemade" */}
                <div className="absolute top-4 left-4 z-20 glass-card px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>100% Homemade</span>
                </div>

                {/* Kemasan Bersih */}
                <div className="absolute bottom-4 right-4 z-20 glass-card px-3 py-1 rounded-lg text-xs font-semibold text-white/90">
                  Botol 250 ml
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic Information Card (Pure Flavor & Freshness Details) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-white/35 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-white/20 border border-white/30 text-white">
                    Varian #{activeIndex + 1}
                  </span>
                  <span className="text-xs text-white/70 font-medium">Es Lumut JUNI</span>
                </div>

                {/* Flavor Name */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-['Outfit']">
                  {currentFlavor.name}
                </h3>
                <p className={`text-sm sm:text-base font-semibold ${currentFlavor.textColor} mb-4`}>
                  {currentFlavor.tagline}
                </p>

                {/* Freshness / Taste Description */}
                <p className="text-sm text-white/85 leading-relaxed mb-6 font-normal">
                  {currentFlavor.description}
                </p>

                {/* Karakteristik Bahan Alami */}
                <div className="mb-6 p-4 rounded-2xl bg-black/20 border border-white/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
                    <Info size={15} className="text-cyan-300" />
                    <span>Komposisi & Karakter Rasa:</span>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {currentFlavor.komposisi}
                  </p>
                </div>

                {/* Highlight Poin Keunikan */}
                <div className="flex flex-wrap gap-2">
                  {currentFlavor.highlights.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white/90 font-medium flex items-center gap-1.5"
                    >
                      <Leaf size={12} className="text-emerald-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows & Pagination */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/15">
            <button
              onClick={() => goToSlide(activeIndex - 1)}
              className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-xs md:text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Varian Sebelumnya</span>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {FLAVORS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-white shadow-md' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Lihat varian ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goToSlide(activeIndex + 1)}
              className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-xs md:text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <span className="hidden sm:inline">Varian Selanjutnya</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN PRODUK (INFORMASI MUTU & KESEGARAN) */}
      <section id="keunggulan" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-white mb-3">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Karakteristik Produk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Keistimewaan Es Lumut JUNI
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto mt-2">
            Mengenal lebih dekat keunikan tekstur dan racikan bahan alami yang membuat Es Lumut JUNI istimewa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6 border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-rose-500/30 border border-rose-400/50 flex items-center justify-center text-rose-300 mb-4 shadow-inner">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">100% Homemade</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Dibuat secara segar dengan metode tradisional agar tekstur serutan lumutnya selalu lembut dan kenyal alami.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/30 border border-amber-400/50 flex items-center justify-center text-amber-300 mb-4 shadow-inner">
              <Droplets size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Kuah Susu Gurih</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Perpaduan seimbang antara susu murni gurih dan manisnya sari buah alami tanpa menimbulkan rasa enek di lidah.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-4 shadow-inner">
              <Leaf size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Bahan Alami Pilihan</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Menggunakan gula murni tanpa pemanis buatan sakarin atau siklamat, serta pewarna alami sari buah dan daun suji.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-4 shadow-inner">
              <Layers size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Kemasan Higienis</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Dikemas dalam botol tertutup rapat 250ml untuk menjaga kesegaran rasa dingin dan kebersihan serutan jeli.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="mt-12 border-t border-white/15 bg-black/40 backdrop-blur-xl py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center font-black text-white font-['Outfit']">
              J
            </div>
            <div>
              <span className="font-bold text-sm text-white font-['Outfit']">Es Lumut JUNI</span>
              <p className="text-[11px] text-white/60">Katalog & Galeri Informasi Visual Minuman Homemade</p>
            </div>
          </div>

          <div className="text-xs text-white/60">
            &copy; 2026 Es Lumut JUNI · Galeri Visual Produk
          </div>
        </div>
      </footer>
    </div>
  );
}
