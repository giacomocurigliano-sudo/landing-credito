"use client"; // INDISPENSABILE per le parti interattive

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Assicurati che questo file esista nella cartella components!
import CalcolatoreRata from "@/components/CalcolatoreRata"; 

export default function Home() {
  // Variabile per gestire l'apertura/chiusura del menu mobile
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- HEADER STILE CREDIT-ONE (Nuovo) --- */}
      <header className="bg-white py-6 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO (Visibile sia su Mobile che Desktop) */}
          <Link href="/" className="flex items-center mr-8">
             <Image src="/logo.png" alt="Logo" width={160} height={50} className="h-10 w-auto object-contain" priority />
          </Link>
          </div>

          {/* MENU DESKTOP CENTRATO */}
          <nav className="hidden md:flex w-full items-center justify-center gap-8 lg:gap-12 text-sm font-bold tracking-wide">
            
            <Link href="/" className="text-[#0F1E38] hover:text-blue-600 transition">
              HOME
            </Link>

            {/* Colore ORO specifico #C1A673 */}
            <Link href="/chi-siamo" className="text-[#C1A673] hover:text-[#a38955] transition">
              CHI SIAMO
            </Link>

            {/* BOTTONE A PILLOLA */}
            <Link href="#riconfigurazione" className="border-2 border-[#0F1E38] text-[#0F1E38] px-6 py-2 rounded-full hover:bg-[#0F1E38] hover:text-white transition duration-300">
              RICONFIGURAZIONE
            </Link>

            <Link href="#servizi" className="text-[#0F1E38] hover:text-blue-600 transition">
              SERVIZI
            </Link>

            <Link href="/blog" className="text-[#0F1E38] hover:text-blue-600 transition">
              BLOG
            </Link>

            <Link href="#contatti" className="text-[#0F1E38] hover:text-blue-600 transition">
              CONTATTI
            </Link>

          </nav>

          {/* ICONA HAMBURGER (Mobile) */}
          <div className="md:hidden">
            <button 
                className="text-[#0F1E38] focus:outline-none"
                onClick={() => setMenuAperto(!menuAperto)}
            >
                {/* Logica icona: se aperto mostra X, se chiuso mostra 3 linee */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuAperto ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
          </div>
        </div>

        {/* MENU A TENDINA MOBILE (Visibile solo quando menuAperto è true) */}
        {menuAperto && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg flex flex-col p-6 space-y-6 text-center z-50">
                <Link href="/" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">HOME</Link>
                <Link href="/chi-siamo" onClick={() => setMenuAperto(false)} className="text-[#C1A673] font-bold text-lg">CHI SIAMO</Link>
                <Link href="#riconfigurazione" onClick={() => setMenuAperto(false)} className="border-2 border-[#0F1E38] text-[#0F1E38] px-6 py-2 rounded-full mx-auto inline-block font-bold">RICONFIGURAZIONE</Link>
                <Link href="#servizi" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">SERVIZI</Link>
                <Link href="/blog" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">BLOG</Link>
                <Link href="#contatti" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">CONTATTI</Link>
            </div>
        )}
      </header>

      {/* --- HERO SECTION CON CALCOLATORE --- */}
      <section className="bg-[#0F1E38] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Testo a Sinistra */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Il Credito su Misura, <br /> <span className="text-[#C1A673]">Semplice e Veloce.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl mx-auto md:mx-0">
                Confrontiamo per te le migliori offerte di Mutui e Prestiti. 
                Trova la rata perfetta in meno di 30 secondi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <a href="#prodotti" className="bg-[#C1A673] text-[#0F1E38] px-8 py-3 rounded-full font-bold hover:bg-white transition shadow-lg">
                  Scopri i Prodotti
                 </a>
                 <div className="flex items-center gap-2 text-sm text-blue-200 mt-2 sm:mt-0 justify-center">
                    ✅ Esito in 24h
                 </div>
              </div>
            </div>

            {/* Calcolatore a Destra */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0">
                <CalcolatoreRata />
            </div>

          </div>
        </div>
      </section>

      {/* --- SEZIONE SERVIZI / PRODOTTI --- */}
      <section id="prodotti" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0F1E38]">Le Nostre Soluzioni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#0F1E38] hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">Mutuo Prima Casa</h3>
            <p className="text-gray-600">Tassi fissi e variabili ai minimi storici. Copertura fino al 100%.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#C1A673] hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">Cessione del Quinto</h3>
            <p className="text-gray-600">Per dipendenti e pensionati. Rata comoda direttamente in busta paga.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#0F1E38] hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">Prestiti Personali</h3>
            <p className="text-gray-600">Liquidità veloce per i tuoi progetti personali fino a 30.000€.</p>
          </div>
        </div>
      </section>

      {/* --- SEZIONE CHI SIAMO --- */}
      <section id="chi-siamo" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
                {/* Placeholder Immagine */}
                <div className="bg-white h-64 rounded-lg flex items-center justify-center text-gray-400 shadow-inner border border-gray-200">
                    <span className="font-semibold">Inserisci qui foto Team (public/team.jpg)</span>
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#0F1E38]">Chi Siamo</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Siamo un team di mediatori creditizi iscritti all'OAM con una visione chiara: 
                    mettere il cliente al centro.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Convenzioni con i principali istituti bancari.</li>
                    <li>Consulenza trasparente e zero sorprese.</li>
                    <li>Supporto dedicato fino all'erogazione.</li>
                </ul>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F1E38] text-gray-400 py-10 text-sm border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-bold text-white tracking-widest">CREDIT-ONE S.P.A.</p>
          <p>P.IVA: 12345678901 - Iscrizione OAM n. M12345</p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Trasparenza</a>
          </div>
        </div>
      </footer>

    </main>
  );
}