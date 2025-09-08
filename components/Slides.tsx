
import React from 'react';

// ICONS
const ChevronLeftIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);
const ExpandIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1v4m0 0h-4m4-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
);
const CompressIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H4m0 0v4M4 4l5 5m7-5h4m0 0v4m-4-4l-5 5M8 20H4m0 0v-4m4 4l5-5m7 5h4m0 0v-4m-4 4l-5-5" /></svg>
);
const PdfIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
);
const WhatsappIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.25 13.5a.75.75 0 01-.75-.75V8.5a.75.75 0 011.5 0v3.5a.75.75 0 01-.75.75zM10 13.5a.75.75 0 01-.75-.75V7.25a.75.75 0 011.5 0v5.5a.75.75 0 01-.75.75zM12.75 13.5a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" /></svg>
);
const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
);
const ClockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
);

// UI COMPONENTS
const GlassButton: React.FC<{ onClick?: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
  <button onClick={onClick} className={`bg-white/30 backdrop-blur-md border border-white/40 text-slate-800 rounded-full shadow-lg hover:bg-white/50 transition-all duration-200 ${className}`}>
    {children}
  </button>
);

export const Navigation: React.FC<{ onPrev: () => void; onNext: () => void }> = ({ onPrev, onNext }) => (
  <div className="flex items-center gap-4">
    <GlassButton onClick={onPrev} className="p-3"><ChevronLeftIcon /></GlassButton>
    <GlassButton onClick={onNext} className="p-3"><ChevronRightIcon /></GlassButton>
  </div>
);

export const FullscreenButton: React.FC<{ isFullscreen: boolean; onClick: () => void }> = ({ isFullscreen, onClick }) => (
  <GlassButton onClick={onClick} className="p-3">
    {isFullscreen ? <CompressIcon /> : <ExpandIcon />}
  </GlassButton>
);

export const DownloadPdfButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <GlassButton onClick={onClick} className="p-3">
    <PdfIcon />
  </GlassButton>
);

const SlideWrapper: React.FC<{ title: string; children: React.ReactNode; subtitle?: string; }> = ({ title, subtitle, children }) => (
  <div className="w-full h-full bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-16 md:p-20 text-slate-800 flex flex-col overflow-hidden print:shadow-none print:bg-white print:backdrop-blur-none">
    <div className="flex-shrink-0 mb-6">
      <h1 className="text-5xl md:text-6xl font-bold text-purple-800 tracking-tight">{title}</h1>
      {subtitle && <p className="text-2xl text-yellow-700 font-medium mt-1">{subtitle}</p>}
    </div>
    <div className="flex-grow overflow-y-auto pr-4 -mr-4">{children}</div>
  </div>
);

const PriceCategory: React.FC<{title: string; items: { name: string; price: string; note?: string }[]}> = ({ title, items }) => (
    <div className="bg-purple-50/50 p-4 lg:p-6 rounded-2xl border border-white/50 shadow-md h-full">
        <h3 className="text-2xl font-bold text-purple-700 mb-3 border-b-2 border-purple-200 pb-2">{title}</h3>
        <ul className="space-y-3 text-2xl text-slate-700">
            {items.map((item, index) => (
                <li key={index} className="flex justify-between items-start gap-4">
                    <span className="flex-1">{item.name}{item.note && <span className="block text-lg text-slate-500">{item.note}</span>}</span>
                    <span className="font-semibold text-slate-800 whitespace-nowrap">{item.price}</span>
                </li>
            ))}
        </ul>
    </div>
);


// SLIDE COMPONENTS
export const Slide0_Intro: React.FC = () => (
    <SlideWrapper title="Digital Printing Survei">
        <div className="flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-wide">
                BACHTIAR ARYANSYAH PUTRA
            </h2>
            <p className="mt-4 text-3xl text-slate-600 font-medium">
                24091367032
            </p>
        </div>
    </SlideWrapper>
);

export const Slide1_Profile: React.FC = () => (
    <SlideWrapper title="Profil Brand">
        <div className="grid md:grid-cols-2 gap-10 h-full">
            <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="relative z-10 text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 leading-normal pb-4">
                    AJ Digital Printing
                </h2>
                <p className="mt-4 text-3xl text-slate-600">Solusi Cetak Digital Terpercaya di Sidoarjo.</p>
            </div>
            <div className="flex flex-col justify-center">
                <div className="bg-white/40 p-8 rounded-2xl shadow-lg border border-white/50 space-y-5">
                    <div className="flex items-start gap-4">
                        <LocationIcon />
                        <div>
                            <h3 className="font-bold text-purple-800 text-2xl">Lokasi</h3>
                            <p className="text-xl">Jl. Wirabumi No. 99, Gedangan, Sidoarjo, Jawa Timur</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <WhatsappIcon />
                        <div>
                            <h3 className="font-bold text-purple-800 text-2xl">WhatsApp</h3>
                            <p className="text-xl">081131126789</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <InstagramIcon />
                        <div>
                            <h3 className="font-bold text-purple-800 text-2xl">Instagram</h3>
                            <p className="text-xl">@ajdigitalprinting</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <ClockIcon />
                        <div>
                            <h3 className="font-bold text-purple-800 text-2xl">Jam Operasional</h3>
                            <p className="text-xl">Senin - Sabtu (08.00–16.00), Minggu Tutup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SlideWrapper>
);

export const Slide2_Products_Part1: React.FC = () => (
    <SlideWrapper title="Produk & Layanan" subtitle="Media Promosi">
        <div className="grid md:grid-cols-2 gap-6 h-full">
            <PriceCategory title="Outdoor/Indoor" items={[
                { name: "Banner Flexi 280gr", price: "Rp 18.000 /meter" },
                { name: "Banner Flexi 340gr", price: "Rp 22.000 /meter" },
                { name: "Banner Flexi Korcin 440gr", price: "Rp 38.000 /meter" },
                { name: "Spanduk Kain", note: "Satin/Textile", price: "Mulai Rp 28.000 /meter" },
                { name: "Stiker Oneway", price: "Rp 70.000 /meter" },
            ]} />
            <PriceCategory title="Portabel (Lengkap)" items={[
                { name: "X-Banner (60x160 cm) - Indoor", price: "Rp 84.000" },
                { name: "X-Banner (60x160 cm) - Outdoor", price: "Rp 73.500" },
                { name: "X-Banner (80x180 cm) - Indoor", price: "Rp 95.000" },
                { name: "X-Banner (80x180 cm) - Outdoor", price: "Rp 80.000" },
                { name: "Roll Banner (60x160 cm) - Indoor", price: "Rp 190.000" },
                { name: "Roll Banner (60x160 cm) - Outdoor", price: "Rp 155.000" },
                { name: "Roll Banner (85x200 cm) - Indoor", price: "Rp 250.000" },
                { name: "Roll Banner (85x200 cm) - Outdoor", price: "Rp 190.000" },
            ]} />
        </div>
    </SlideWrapper>
);

export const Slide2_Products_Part2: React.FC = () => (
    <SlideWrapper title="Produk & Layanan" subtitle="Cetak Stiker & Kertas">
        <div className="grid md:grid-cols-2 gap-6 h-full">
            <PriceCategory title="Cetak Stiker A3+" items={[
                { name: "Bahan Bontak", price: "Rp 4.500 /lbr" },
                { name: "Bahan Vinyl", note: "Glossy/Doff/Transparan", price: "Rp 6.500 /lbr" },
                { name: "Jasa Cutting Kiss-cut (>3cm)", price: "+ Rp 3.500" },
                { name: "Jasa Cutting Kiss-cut (<3cm)", price: "+ Rp 6.000" },
            ]} />
             <PriceCategory title="Cetak Kertas & Kartu" items={[
                { name: "Brosur A5", note: "Art Paper 120gr, 1 Sisi", price: "Rp 285.000 /rim" },
                { name: "Brosur A4", note: "Art Paper 120gr, 1 Sisi", price: "Rp 560.000 /rim" },
                { name: "Kartu Nama (1 Sisi)", price: "Rp 25.000 /box" },
                { name: "Kartu Nama (2 Sisi)", price: "Rp 35.000 /box" },
                { name: "Kartu Nama + Laminasi (2 Sisi)", price: "Rp 45.000 /box" },
            ]} />
        </div>
    </SlideWrapper>
);

export const Slide2_Products_Part3: React.FC = () => (
    <SlideWrapper title="Produk & Layanan" subtitle="Jasa Pendukung">
        <div className="grid md:grid-cols-2 gap-6 h-full">
            <PriceCategory title="Jasa File & Desain" items={[
                { name: "Jasa Desain", price: "Rp 35.000 /file" },
                { name: "Jasa Setting File", price: "Rp 25.000 /file" },
            ]} />
             <PriceCategory title="Laminasi" items={[
                { name: "Laminasi Hot A3", note: "Doff/Glossy", price: "Rp 5.000" },
                { name: "Laminasi Cold A3", note: "Doff/Glossy", price: "Rp 3.500" },
            ]} />
        </div>
    </SlideWrapper>
);

export const Slide3_Testimonial: React.FC = () => (
    <SlideWrapper title="Testimoni Klien">
        <div className="flex flex-col justify-center h-full text-center">
            <div className="relative max-w-4xl mx-auto">
                <span className="absolute -top-8 -left-8 text-9xl text-purple-200/50 font-serif opacity-50">“</span>
                <blockquote className="text-3xl md:text-4xl italic text-slate-700 leading-relaxed">
                    Saya merasakan sendiri kualitas pelayanan dari AJ Digital Printing. Proses konsultasi untuk mendapatkan materi analisis sangat mudah, respon yang diberikan via WhatsApp sangat cepat dan informatif. Ini membuktikan bahwa ulasan positif dari pelanggan lain benar-benar akurat. Pengalaman ini memberikan saya keyakinan penuh untuk merekomendasikan AJ Digital Printing, tidak hanya dari segi kualitas cetak tetapi juga dari pengalaman pelanggan yang luar biasa.
                </blockquote>
                <cite className="block mt-8 text-3xl font-bold text-purple-800 not-italic">
                    - Bachtiar A.P., Mahasiswa
                </cite>
            </div>
        </div>
    </SlideWrapper>
);
