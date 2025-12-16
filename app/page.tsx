"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Assicurati che questo componente esista
import CalcolatoreRata from "@/components/CalcolatoreRata"; 

export default function Home() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-[#0F1E38] font-sans selection:bg-[#C1A673] selection:text-white">
      
      {/* =================================================================================
          1. HEADER
         ================================================================================= */}
      <header className="bg-white/95 backdrop-blur-md py-5 sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO (Sinistra) */}
          <div className="flex items-center">
             <Link href="/" className="flex items-center mr-8">
                {/* Il file deve essere in cartella 'public' e chiamarsi 'logo.png' */}
                <Image 
                    src="/logo.png" 
                    alt="Credit-One Logo" 
                    width={160} 
                    height={50} 
                    className="h-10 w-auto object-contain" 
                    priority 
                />
             </Link>
          </div>

          {/* MENU DESKTOP (Centro) */}
          <nav className="hidden md:flex w-full items-center justify-center gap-10 text-[13px] font-bold tracking-widest uppercase">
            <Link href="/" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Home</Link>
            <Link href="/chi-siamo" className="text-[#C1A673] hover:text-[#9e8659] transition-colors duration-300">Chi Siamo</Link>
            <Link href="#riconfigurazione" className="border-[1.5px] border-[#0F1E38] text-[#0F1E38] px-8 py-2.5 rounded-full hover:bg-[#0F1E38] hover:text-white transition-all duration-300 transform hover:scale-105">Riconfigurazione</Link>
            <Link href="#servizi" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Servizi</Link>
            <Link href="/blog" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Blog</Link>
            <Link href="#contatti" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Contatti</Link>
          </nav>

          {/* HAMBURGER (Mobile) */}
          <div className="md:hidden">
            <button className="text-[#0F1E38] p-2" onClick={() => setMenuAperto(!menuAperto)}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuAperto ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
          </div>
        </div>

        {/* MENU TENDINA (Mobile) */}
        {menuAperto && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-2xl flex flex-col p-8 space-y-6 text-center z-50">
                <Link href="/" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">HOME</Link>
                <Link href="/chi-siamo" onClick={() => setMenuAperto(false)} className="text-[#C1A673] font-bold text-lg">CHI SIAMO</Link>
                <Link href="#riconfigurazione" onClick={() => setMenuAperto(false)} className="bg-[#0F1E38] text-white px-8 py-3 rounded-full mx-auto inline-block font-bold shadow-lg">RICONFIGURAZIONE</Link>
                <Link href="#servizi" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">SERVIZI</Link>
                <Link href="#contatti" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">CONTATTI</Link>
            </div>
        )}
      </header>

      {/* =================================================================================
          2. HERO SECTION
         ================================================================================= */}
      <section className="relative bg-gradient-to-br from-[#0F1E38] via-[#162a4d] to-[#0a1529] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C1A673] rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl mix-blend-overlay opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#C1A673]/30 bg-[#C1A673]/10 text-[#C1A673] text-xs font-bold tracking-widest uppercase mb-2">
                Mediazione Creditizia Certificata OAM
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Il Tuo Futuro <br />
                Merita <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1A673] to-[#e3d0a6]">Credito.</span>
              </h1>
              <p className="text-lg text-blue-100/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Non siamo una banca, siamo il tuo vantaggio competitivo. Confrontiamo oltre 20 istituti per garantirti le condizioni che meriti.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                 <a href="#prodotti" className="bg-[#C1A673] text-[#0F1E38] px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">Inizia la Valutazione</a>
                 <a href="#contatti" className="px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition text-white">Parla con un Esperto</a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#C1A673] blur-2xl opacity-20 transform rotate-3 scale-95 rounded-3xl"></div>
                    <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
                        <CalcolatoreRata />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          3. STATS BAR
         ================================================================================= */}
      <section className="bg-[#0F1E38] border-t border-white/10 py-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                <div><p className="text-3xl md:text-4xl font-bold text-white mb-1">20+</p><p className="text-xs text-[#C1A673] uppercase tracking-widest">Banche Partner</p></div>
                <div><p className="text-3xl md:text-4xl font-bold text-white mb-1">€50M+</p><p className="text-xs text-[#C1A673] uppercase tracking-widest">Erogato 2024</p></div>
                <div><p className="text-3xl md:text-4xl font-bold text-white mb-1">1.500+</p><p className="text-xs text-[#C1A673] uppercase tracking-widest">Clienti Felici</p></div>
                <div><p className="text-3xl md:text-4xl font-bold text-white mb-1">24h</p><p className="text-xs text-[#C1A673] uppercase tracking-widest">Tempo Risposta</p></div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. SERVIZI
         ================================================================================= */}
      <section id="servizi" className="py-24 bg-gray-50 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#C1A673] font-bold tracking-widest uppercase text-sm mb-3">Le Nostre Soluzioni</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1E38]">Prodotti Finanziari d'Eccellenza</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0F1E38] group-hover:h-2 transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Mutuo Prima Casa</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Accedi a tassi esclusivi riservati ai broker.</p>
          </div>
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C1A673] group-hover:h-2 transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Cessione del Quinto</h3>
            <p className="text-gray-500 leading-relaxed mb-6">La liquidità semplice per dipendenti e pensionati.</p>
          </div>
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0F1E38] group-hover:h-2 transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Prestiti Personali</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Realizza i tuoi progetti in 48 ore.</p>
          </div>
        </div>
      </section>

      {/* =================================================================================
          5. FOOTER
         ================================================================================= */}
      <footer className="bg-[#0F1E38] text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
             <h4 className="text-2xl font-extrabold mb-6 tracking-tighter">CREDIT-ONE</h4>
             <p className="text-gray-400 text-sm">Via Roma 1, Milano (MI) - P.IVA 12345678901</p>
        </div>
      </footer>
    </main>
  );
}