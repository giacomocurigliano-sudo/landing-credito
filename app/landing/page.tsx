"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { iframeResizer } from 'iframe-resizer';

export default function LandingHomeCreditOne() {
  
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (mainRef.current) {
      try {
        iframeResizer({ log: false, checkOrigin: false }, mainRef.current);
      } catch (e) {
        console.log("Resizer info: visualizzazione diretta.");
      }
    }
  }, []);

  return (
    <div ref={mainRef} className="antialiased"> 
      <main className="min-h-screen bg-[#0F1E38] text-white font-sans selection:bg-[#9E1B32] selection:text-white overflow-hidden">
      
      {/* =================================================================================
          1. HERO SECTION "ULTRA PREMIUM"
         ================================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* EFFETTI LUCE DI SFONDO (Glows) */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#9E1B32] rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C1A673] rounded-full blur-[100px] opacity-20"></div>
        
        {/* GRIGLIA TECNOLOGICA SOTTOFONDO */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TESTO */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#C1A673]/30 bg-[#C1A673]/10 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] uppercase text-[#C1A673] shadow-[0_0_15px_rgba(193,166,115,0.2)]">
                <span className="w-2 h-2 bg-[#C1A673] rounded-full animate-ping"></span>
                Eccellenza Finanziaria
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Il Credito <br/>
              Evoluto per <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E1B32] via-[#ff4d6d] to-[#C1A673]">il Tuo Futuro.</span>
            </h1>
            
            <p className="text-xl text-blue-100/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-2 border-[#9E1B32] pl-6">
              Piattaforma integrata di mediazione creditizia. 
              Velocità digitale, solidità bancaria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                 <a href="#contatti" className="group relative bg-[#9E1B32] text-white px-10 py-5 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(158,27,50,0.4)]">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative uppercase tracking-wider flex items-center gap-2">
                        Richiedi Ora <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </span>
                 </a>
                 <a href="#servizi" className="px-10 py-5 rounded-xl font-bold border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition text-white uppercase tracking-wider">
                  Scopri i Servizi
                 </a>
            </div>
          </div>
          
          {/* ELEMENTO VISIVO (Card Glassmorphism) */}
          <div className="relative hidden lg:block">
              {/* Cerchi rotanti */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#C1A673]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                 <div className="flex justify-between items-start mb-8">
                    <div className="text-2xl font-bold text-white">Credit-One<span className="text-[#9E1B32]">.</span></div>
                    <div className="w-12 h-8 bg-[#C1A673]/20 rounded-md flex items-center justify-center border border-[#C1A673]/50">
                        <div className="w-6 h-6 bg-[#C1A673] rounded-full blur-sm"></div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/5 rounded w-full"></div>
                    <div className="h-4 bg-white/5 rounded w-5/6"></div>
                 </div>
                 <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-400 uppercase">Esito Valutazione</p>
                        <p className="text-xl font-bold text-[#4ade80] text-shadow-glow">APPROVATO</p>
                    </div>
                    <div className="text-3xl">🚀</div>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          2. SERVIZI (Dark Cards with Glow)
         ================================================================================= */}
      <section id="servizi" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">L'Ecosistema <span className="text-[#9E1B32]">Finanziario</span></h2>
                <p className="text-gray-400 text-lg">Soluzioni sartoriali progettate per performare.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* CARD STYLE DEFINITION */}
              {[
                { icon: "🚗", title: "Leasing", desc: "Veicolare, strumentale e immobiliare per la tua impresa.", letter: "A" },
                { icon: "⚖️", title: "Anticipo TFS", desc: "Liquidità immediata senza attese burocratiche.", letter: "B" },
                { icon: "🏠", title: "Mutuo", desc: "Tassi esclusivi e predelibera lampo.", letter: "C" },
                { icon: "📊", title: "Factoring", desc: "Trasforma i crediti in liquidità operativa.", letter: "D" },
                { icon: "👤", title: "Prestiti", desc: "Fino a 50.000€ per privati e autonomi.", letter: "E", highlight: true },
                { icon: "💳", title: "Carta Impresa", desc: "Gestione flessibile dei flussi di cassa.", letter: "F" },
              ].map((item, idx) => (
                <div key={idx} className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden hover:-translate-y-2
                    ${item.highlight 
                        ? 'bg-gradient-to-br from-[#9E1B32]/20 to-transparent border-[#9E1B32]/50 hover:shadow-[0_0_40px_rgba(158,27,50,0.3)]' 
                        : 'bg-white/5 border-white/5 hover:border-[#C1A673]/50 hover:shadow-[0_0_30px_rgba(193,166,115,0.15)]'
                    }`}>
                    
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg
                            ${item.highlight ? 'bg-[#9E1B32] text-white' : 'bg-[#0a1529] text-[#C1A673] border border-white/10'}`}>
                            {item.icon}
                        </div>
                        <span className="text-sm font-bold text-white/20 font-mono">0{idx + 1}</span>
                    </div>
                    
                    <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-[#C1A673] transition-colors uppercase tracking-wide">
                        {item.title}
                    </h3>
                    <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                    
                    <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-[#C1A673]">
                        Scopri di più <span>→</span>
                    </div>
                </div>
              ))}

            </div>
        </div>
      </section>

      {/* =================================================================================
          3. NUMERI (Section con sfumatura)
         ================================================================================= */}
      <section className="py-24 relative bg-gradient-to-b from-[#0F1E38] to-[#080f1c]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C1A673]/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 text-white">I Numeri del <span className="text-[#C1A673]">Successo</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                    { val: "12k", label: "Richieste" },
                    { val: "9.5k", label: "Clienti" },
                    { val: "2.5k", label: "Pratiche" },
                    { val: "99%", label: "Successo" }
                ].map((stat, i) => (
                    <div key={i} className="group">
                        <p className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#C1A673] to-[#7a6236] mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                            {stat.val}
                        </p>
                        <p className="text-sm text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-20">
                 <a href="#lavora" className="inline-block border border-[#9E1B32] text-[#9E1B32] hover:bg-[#9E1B32] hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(158,27,50,0.1)] hover:shadow-[0_0_30px_rgba(158,27,50,0.4)]">
                    Lavora con noi
                 </a>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. VIDEO & QUOTE (Dark Theme)
         ================================================================================= */}
      <section className="py-24 bg-[#080f1c] relative overflow-hidden">
        {/* Decorazione laterale rossa */}
        <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-[#9E1B32] rounded-full blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* VIDEO PLACEHOLDER */}
            <div className="w-full lg:w-1/2 aspect-video bg-black/50 rounded-2xl flex items-center justify-center border border-white/10 relative group cursor-pointer overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 bg-[url('https://via.placeholder.com/800x450')]"></div>
                 <div className="relative z-10 w-20 h-20 bg-[#9E1B32] rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(158,27,50,0.6)] group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
            </div>

            {/* QUOTE */}
            <div className="w-full lg:w-1/2">
                <div className="border-l-4 border-[#C1A673] pl-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">L'eccellenza non è un dettaglio.</h3>
                    <blockquote className="text-xl italic text-gray-400 mb-8 leading-relaxed">
                        "Non basta fare bene. Bisogna fare molto bene per garantire il futuro dei nostri clienti. Questo è il metodo Credit-One."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-[#9E1B32]"></div>
                        <div>
                            <p className="font-bold text-white">Giacomo Curigliano</p>
                            <p className="text-xs text-[#C1A673] uppercase font-bold tracking-wider">CEO Founder</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          5. CTA FINALE
         ================================================================================= */}
      <section id="contatti" className="py-24 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[#9E1B32]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] to-transparent opacity-80"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Pronto a realizzare <br/> i tuoi progetti?
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-light">
                Affidati agli specialisti del credito. Risposte rapide, soluzioni concrete.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="tel:800123456" className="bg-white text-[#9E1B32] px-12 py-5 rounded-full font-bold hover:bg-[#f0f0f0] hover:scale-105 transition-all duration-300 shadow-2xl text-lg uppercase tracking-widest flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    800 123 456
                </a>
                <a href="mailto:info@credit-one.it" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-[#9E1B32] transition-all duration-300 text-lg uppercase tracking-widest">
                    Invia Email
                </a>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-xs">
                &copy; 2024 Credit-One S.p.A. - P.IVA 12345678901 - Iscrizione OAM n. M12345
            </div>
         </div>
      </section>

      </main>
    </div>
  );
}