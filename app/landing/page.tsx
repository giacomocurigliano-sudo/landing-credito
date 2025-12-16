"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; // Importiamo il gestore script di Next.js

export default function LandingMicrocredito() {
  
  return (
    <div className="antialiased"> 
      {/* QUESTO SCRIPT FA LA MAGIA: 
          Carica la libreria di ridimensionamento direttamente da internet.
          Nessuna installazione necessaria. Risolve l'errore di build.
      */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[#0F1E38] text-white font-sans selection:bg-[#9E1B32] selection:text-white overflow-hidden">
      
      {/* =================================================================================
          1. HERO SECTION: IMPATTO TOTALE
         ================================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* EFFETTI DI LUCE (Background) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9E1B32] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0F1E38] rounded-full blur-[100px] opacity-80 z-10"></div>
        
        {/* PATTERN TECNOLOGICO */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* COPYWRITING HERO */}
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
          
          {/* ELEMENTO VISIVO (Card Comparison) */}
          <div className="relative hidden lg:block perspective-1000">
              <div className="relative z-10 bg-[#0a1529]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                 <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <span className="text-lg font-bold text-gray-400">Canale Tradizionale</span>
                    <span className="text-xl font-bold text-white">Credit-One<span className="text-[#9E1B32]">.</span></span>
                 </div>
                 
                 <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="flex justify-between items-center group">
                        <span className="text-sm text-gray-500 line-through decoration-red-500/50">Richieste garanzie reali</span>
                        <span className="flex items-center gap-2 text-[#4ade80] font-bold bg-[#4ade80]/10 px-3 py-1 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                            Zero Garanzie Reali
                        </span>
                    </div>
                    {/* Row 2 */}
                    <div className="flex justify-between items-center group">
                        <span className="text-sm text-gray-500">Tempi: 60-90 giorni</span>
                        <span className="flex items-center gap-2 text-[#C1A673] font-bold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            Erogazione Rapida
                        </span>
                    </div>
                    {/* Row 3 */}
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

      {/* =================================================================================
          2. A CHI CI RIVOLGIAMO (Target)
         ================================================================================= */}
      <section className="py-20 bg-[#080f1c] relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Liquidità per <span className="text-[#9E1B32] border-b-2 border-[#9E1B32]">chi fa impresa</span></h2>
                <p className="text-gray-400">Non importa se sei nato ieri o 10 anni fa. Se hai un progetto, noi abbiamo i fondi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#C1A673] hover:shadow-[0_0_30px_rgba(193,166,115,0.1)] transition-all duration-300">
                    <div className="w-16 h-16 bg-[#C1A673]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
                    <h3 className="text-xl font-bold text-white mb-3">Start-up & Nuove Imprese</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Hai aperto la partita IVA da poco? Le banche non ti ascoltano? Il Microcredito è nato proprio per te. Finanziamo l'avvio e le prime spese.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#9E1B32] hover:shadow-[0_0_30px_rgba(158,27,50,0.2)] transition-all duration-300">
                    <div className="w-16 h-16 bg-[#9E1B32]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">💼</div>
                    <h3 className="text-xl font-bold text-white mb-3">Professionisti & Freelance</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Iscritti agli ordini o freelance. Ottieni liquidità per acquistare attrezzature, software, arredamento ufficio o corsi di formazione.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="group bg-[#0F1E38] p-8 rounded-2xl border border-white/5 hover:border-[#C1A673] hover:shadow-[0_0_30px_rgba(193,166,115,0.1)] transition-all duration-300">
                    <div className="w-16 h-16 bg-[#C1A673]/10 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">🏭</div>
                    <h3 className="text-xl font-bold text-white mb-3">PMI fino a 5 anni</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Società di persone o capitali attive da meno di 5 anni. Espandi il tuo business, assumi personale o lancia nuovi prodotti.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          3. I VANTAGGI ESCLUSIVI (Perché noi)
         ================================================================================= */}
      <section className="py-24 relative overflow-hidden">
        {/* Sfondo sfumato */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E38] to-[#1a0509]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                <div className="space-y-10">
                    <h2 className="text-4xl font-extrabold text-white leading-tight">
                        Il Credito che <br/>
                        <span className="text-[#C1A673]">cambia le regole.</span>
                    </h2>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#4ade80]/20 flex items-center justify-center mt-1 shrink-0">
                                <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Zero Garanzie Reali</h4>
                                <p className="text-gray-400 text-sm">Non ipotechiamo la tua casa. La garanzia la mette lo Stato (Fondo di Garanzia per le PMI) all'80%.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#C1A673]/20 flex items-center justify-center mt-1 shrink-0">
                                <svg className="w-5 h-5 text-[#C1A673]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Importo fino a 50.000€</h4>
                                <p className="text-gray-400 text-sm">Il massimo consentito dalla normativa per il microcredito, erogabile in un'unica soluzione.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#9E1B32]/20 flex items-center justify-center mt-1 shrink-0">
                                <svg className="w-5 h-5 text-[#9E1B32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Tutoraggio Gratuito</h4>
                                <p className="text-gray-400 text-sm">Non ti diamo solo i soldi. Un tutor esperto ti seguirà per tutta la durata del finanziamento per aiutarti a gestire il business.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* VISUAL BOX */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C1A673] to-[#9E1B32] rounded-2xl blur-lg opacity-30 transform rotate-3"></div>
                    <div className="relative bg-[#0F1E38] border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <div className="text-center mb-8">
                            <p className="text-gray-400 uppercase tracking-widest text-xs mb-2">Erogato nell'ultimo mese</p>
                            <p className="text-4xl font-mono font-bold text-white">€ 1.250.000</p>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-[#4ade80] w-[85%] animate-[pulse_2s_infinite]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Richieste Ricevute</span>
                                <span>85% Approvate</span>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-lg text-center">
                                <p className="text-[#C1A673] font-bold text-xl">48h</p>
                                <p className="text-xs text-gray-500">Pre-Fattibilità</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg text-center">
                                <p className="text-[#9E1B32] font-bold text-xl">100%</p>
                                <p className="text-xs text-gray-500">Trasparenza</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* =================================================================================
          4. COME FUNZIONA (Processo)
         ================================================================================= */}
      <section id="verifica" className="py-24 bg-[#080f1c] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-16">Dalla richiesta al bonifico in <span className="text-[#9E1B32]">3 Step</span></h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Linea di connessione (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#0F1E38] via-[#C1A673]/50 to-[#0F1E38] z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 group">
                    <div className="w-24 h-24 mx-auto bg-[#0F1E38] border-2 border-[#C1A673] rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(193,166,115,0.2)] group-hover:bg-[#C1A673] group-hover:text-[#0F1E38] transition-colors duration-300">
                        1
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Compila il Form</h3>
                    <p className="text-gray-400 text-sm px-8">Bastano 2 minuti. Inserisci i dati della tua impresa per una verifica immediata dei requisiti di base.</p>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 group">
                    <div className="w-24 h-24 mx-auto bg-[#0F1E38] border-2 border-[#9E1B32] rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(158,27,50,0.2)] group-hover:bg-[#9E1B32] group-hover:text-white transition-colors duration-300">
                        2
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Analisi Credit-One</h3>
                    <p className="text-gray-400 text-sm px-8">I nostri analisti costruiscono il tuo business plan e presentano la pratica all'Ente Nazionale per il Microcredito.</p>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 group">
                    <div className="w-24 h-24 mx-auto bg-[#0F1E38] border-2 border-[#4ade80] rounded-full flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(74,222,128,0.2)] group-hover:bg-[#4ade80] group-hover:text-[#0F1E38] transition-colors duration-300">
                        3
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Erogazione</h3>
                    <p className="text-gray-400 text-sm px-8">Approvata la pratica, ricevi la liquidità direttamente sul tuo conto corrente bancario.</p>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          5. CTA FINALE AGGRESSIVA
         ================================================================================= */}
      <section className="py-24 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[#9E1B32]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E38] via-transparent to-[#0F1E38] opacity-90"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Il tuo Business non può aspettare. <br/>
                <span className="text-[#C1A673] underline decoration-4 decoration-[#C1A673]/30">Nemmeno tu.</span>
            </h2>
            <p className="text-gray-200 text-xl mb-12 max-w-2xl mx-auto font-light">
                Verifica subito se hai i requisiti per accedere al Fondo di Garanzia. È gratuito e senza impegno.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="tel:800123456" className="bg-white text-[#9E1B32] px-12 py-5 rounded-full font-bold hover:bg-[#f0f0f0] hover:scale-105 transition-all duration-300 shadow-2xl text-lg uppercase tracking-widest flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    Parla con un Esperto
                </a>
                <a href="mailto:microcredito@credit-one.it" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-[#9E1B32] transition-all duration-300 text-lg uppercase tracking-widest">
                    Verifica Requisiti Online
                </a>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-xs flex justify-center gap-8">
                <span>Credit-One S.p.A.</span>
                <span>Iscrizione OAM n. M12345</span>
                <span>Privacy Policy</span>
            </div>
         </div>
      </section>

      </main>
    </div>
  );
}