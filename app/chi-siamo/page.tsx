"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ChiSiamoPage() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-[#0F1E38] font-sans selection:bg-[#C1A673] selection:text-white">
      
      {/* =================================================================================
          1. HEADER (Identico alla Home per continuità)
         ================================================================================= */}
      <header className="bg-white/95 backdrop-blur-md py-5 sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center">
             <Link href="/" className="flex items-center mr-8">
                {/* Assicurati che logo.png sia in public */}
                <img 
                    src="/brand.png" // O "logo.png" se hai risolto il nome
                    alt="Credit-One Logo" 
                    className="h-10 w-auto object-contain" 
                />
             </Link>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex w-full items-center justify-center gap-10 text-[13px] font-bold tracking-widest uppercase">
            <Link href="/" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Home</Link>
            <Link href="/chi-siamo" className="text-[#C1A673] border-b-2 border-[#C1A673]">Chi Siamo</Link>
            <Link href="/#riconfigurazione" className="border-[1.5px] border-[#0F1E38] text-[#0F1E38] px-8 py-2.5 rounded-full hover:bg-[#0F1E38] hover:text-white transition-all duration-300 transform hover:scale-105">Riconfigurazione</Link>
            <Link href="/#servizi" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Servizi</Link>
            <Link href="/blog" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Blog</Link>
            <Link href="/#contatti" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">Contatti</Link>
          </nav>

          {/* HAMBURGER MOBILE */}
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

        {/* MENU MOBILE */}
        {menuAperto && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-2xl flex flex-col p-8 space-y-6 text-center z-50">
                <Link href="/" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">HOME</Link>
                <Link href="/chi-siamo" onClick={() => setMenuAperto(false)} className="text-[#C1A673] font-bold text-lg">CHI SIAMO</Link>
                <Link href="/#riconfigurazione" onClick={() => setMenuAperto(false)} className="bg-[#0F1E38] text-white px-8 py-3 rounded-full mx-auto inline-block font-bold shadow-lg">RICONFIGURAZIONE</Link>
                <Link href="/#servizi" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">SERVIZI</Link>
                <Link href="/#contatti" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">CONTATTI</Link>
            </div>
        )}
      </header>

      {/* =================================================================================
          2. HERO CHI SIAMO
         ================================================================================= */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#0F1E38] overflow-hidden">
        {/* Sfondo Decorativo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#C1A673] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Oltre i Numeri, <br/>
            <span className="text-[#C1A673]">Ci Sono le Persone.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100/80 font-light">
            La nostra storia non parla di tassi d'interesse, ma di progetti realizzati.
          </p>
        </div>
      </section>

      {/* =================================================================================
          3. STORYTELLING & VALORI
         ================================================================================= */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                 {/* Placeholder Immagine */}
                 <div className="bg-gray-100 h-[500px] w-full rounded-2xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38]/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <span className="relative z-10 font-bold">Foto Team / Founder</span>
                 </div>
            </div>
            <div className="md:w-1/2 space-y-8">
                <div>
                    <h4 className="text-[#C1A673] font-bold tracking-widest uppercase text-sm mb-2">La Nostra Filosofia</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F1E38]">Perché ottenere credito è diventato un labirinto?</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Le banche oggi utilizzano algoritmi rigidi. Basta una virgola fuori posto per vedere rifiutata una pratica solida, magari per un dettaglio insignificante agli occhi di un computer.
                    </p>
                    <p className="font-bold text-[#0F1E38] text-xl border-l-4 border-[#C1A673] pl-4">
                        È qui che entriamo in gioco noi.
                    </p>
                    <p>
                        Come mediatori creditizi certificati OAM, noi conosciamo il "dietro le quinte". Sappiamo esattamente come presentare la tua storia finanziaria alla banca giusta, nel modo giusto, trasformando un potenziale "NO" in un "SÌ".
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. FOOTER
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