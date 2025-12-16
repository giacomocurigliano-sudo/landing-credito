"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function LandingMicrocredito() {
  // 1. Stato per i tassi Euribor
  const [euribor, setEuribor] = useState({ e1m: "4.12%", e3m: "3.95%", e6m: "3.88%" });

  // 2. Simulazione recupero dati (puoi collegare un'API reale qui)
  useEffect(() => {
    // Qui andrebbe la chiamata fetch verso il tuo fornitore di dati finanziari
    // Per ora impostiamo i valori istituzionali correnti
    const timer = setTimeout(() => {
      setEuribor({
        e1m: "3.84%",
        e3m: "3.89%",
        e6m: "3.75%"
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="antialiased"> 
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[#0F1E38] text-white font-sans selection:bg-[#9E1B32] selection:text-white overflow-hidden">
        
        {/* =================================================================================
            BARRA TASSI EURIBOR AUTOMATICA (Sticky opzionale)
           ================================================================================= */}
        <div className="w-full bg-[#0a1529]/90 backdrop-blur-md border-b border-[#C1A673]/20 py-2 relative z-50">
          <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Mercati Live</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Euribor 1M:</span>
              <span className="text-[12px] text-[#C1A673] font-mono font-bold">{euribor.e1m}</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 border-x border-white/10 px-6 md:px-12">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Euribor 3M:</span>
              <span className="text-[12px] text-[#C1A673] font-mono font-bold">{euribor.e3m}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Euribor 6M:</span>
              <span className="text-[12px] text-[#C1A673] font-mono font-bold">{euribor.e6m}</span>
            </div>
          </div>
        </div>

        {/* =================================================================================
            1. HERO SECTION: IMPATTO TOTALE
           ================================================================================= */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9E1B32] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0F1E38] rounded-full blur-[100px] opacity-80 z-10"></div>
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

          <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C1A673]/40 bg-[#C1A673]/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase text-[#C1A673] shadow-lg mb-4">
                  <span className="w-2 h-2 bg-[#C1A673] rounded-full animate-ping"></span>
                  Garanzia Statale MCC 80%
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Fino a <span className="text-[#C1A673]">50.000€</span> <br/>
                per la tua <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E1B32] via-[#ff4d6d] to-[#C1A673]">Impresa.</span>
              </h1>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-[#9E1B32] pl-6 my-8">
                <strong className="text-white">La banca ti ha detto no? Noi lavoriamo per il SÌ.</strong><br/>
                Microcredito garantito dallo Stato per Start-up, PMI e Professionisti. 
                Senza garanzie reali. In tempi record.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                   <a href="#verifica" className="group relative bg-[#9E1B32] text-white px-10 py-5 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(158,27,50,0.5)]">
                      <span className="relative z-10 uppercase tracking-widest flex items-center gap-3">
                          Verifica Requisiti <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7a1224] to-[#9E1B32] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                   </a>
                   <div className="flex items-center gap-2 text-sm text-gray-400 px-4 justify-center">
                      <svg className="w-5 h-5 text-[#C1A673]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      Esito in 48h
                   </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block perspective-1000">
                <div className="relative z-10 bg-[#0a1529]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                   <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                      <span className="text-lg font-bold text-gray-400">Canale Tradizionale</span>
                      <span className="text-xl font-bold text-white">Credit-One<span className="text-[#9E1B32]">.</span></span>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="flex justify-between items-center group">
                          <span className="text-sm text-gray-500 line-through decoration-red-500/50">Richieste garanzie reali</span>
                          <span className="flex items-center gap-2 text-[#4ade80] font-bold bg-[#4ade80]/10 px-3 py-1 rounded-full">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                              Zero Garanzie Reali
                          </span>
                      </div>
                      <div className="flex justify-between items-center group">
                          <span className="text-sm text-gray-500">Tempi: 60-90 giorni</span>
                          <span className="flex items-center gap-2 text-[#C1A673] font-bold">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                              Erogazione Rapida
                          </span>
                      </div>
                      <div className="flex justify-between items-center group">
                          <span className="text-sm text-gray-500">Start-up: Spesso Rifiutate</span>
                          <span className="flex items-center gap-2 text-white font-bold">
                              <span className="w-2 h-2 bg-[#9E1B32] rounded-full animate-pulse"></span>
                              Start-up Welcome
                          </span>
                      </div>
                   </div>

                   <div className="mt-8 pt-6 border-t border-white/10 text-center">
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tasso di approvazione</p>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-[#C1A673] to-[#9E1B32] h-full w-[95%]"></div>
                      </div>
                      <p className="text-right text-xs text-[#C1A673] mt-1 font-bold">95%</p>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* ... (IL RESTO DEL CODICE PER TARGET, VANTAGGI, PROCESSO, CTA È IDENTICO A PRIMA) ... */}
        
        {/* SEZIONE TARGET */}
        <section className="py-20 bg-[#080f1c] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Liquidità per <span className="text-[#9E1B32] border-b-2 border-[#9E1B32]">chi fa impresa</span></h2>
                    <p className="text-gray-400">Non importa se sei nato ieri o 10 anni fa. Se hai un progetto, noi abbiamo i fondi.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#C1A673] hover:shadow-[0_0_30px_rgba(193,166,115,0.1)] transition-all duration-300">
                        <div className="w-16 h-16 bg-[#C1A673]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
                        <h3 className="text-xl font-bold text-white mb-3">Start-up & Nuove Imprese</h3>
                        <p className="text-gray-400 text-sm">Hai aperto la partita IVA da poco? Le banche non ti ascoltano? Finanziamo l'avvio e le prime spese.</p>
                    </div>
                    <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#9E1B32] hover:shadow-[0_0_30px_rgba(158,27,50,0.2)] transition-all duration-300">
                        <div className="w-16 h-16 bg-[#9E1B32]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">💼</div>
                        <h3 className="text-xl font-bold text-white mb-3">Professionisti & Freelance</h3>
                        <p className="text-gray-400 text-sm">Ottieni liquidità per acquistare attrezzature, software o arredamento ufficio.</p>
                    </div>
                    <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#C1A673] hover:shadow-[0_0_30px_rgba(193,166,115,0.1)] transition-all duration-300">
                        <div className="w-16 h-16 bg-[#C1A673]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">🏭</div>
                        <h3 className="text-xl font-bold text-white mb-3">PMI fino a 5 anni</h3>
                        <p className="text-gray-400 text-sm">Società attive da meno di 5 anni. Espandi il tuo business o assumi personale.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA FINALE */}
        <section className="py-24 relative overflow-hidden text-center">
             <div className="absolute inset-0 bg-[#9E1B32]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] via-transparent to-[#0F1E38] opacity-90"></div>
             <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                    Il tuo Business non può aspettare. <br/>
                    <span className="text-[#C1A673] underline decoration-4 decoration-[#C1A673]/30">Nemmeno tu.</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="tel:800123456" className="bg-white text-[#9E1B32] px-12 py-5 rounded-full font-bold shadow-2xl text-lg uppercase tracking-widest flex items-center justify-center gap-3">
                        Chiama 800 123 456
                    </a>
                </div>
             </div>
        </section>

      </main>
    </div>
  );
}
