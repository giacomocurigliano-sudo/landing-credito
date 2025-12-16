"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function LandingMicrocredito2025() {
  const [euribor, setEuribor] = useState({ e1m: "3.842%", e3m: "3.895%" });

  return (
    <div className="antialiased bg-[#F8F9FA] text-[#0F1E38] font-sans w-full overflow-x-hidden">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      {/* 1. TICKER LIVE INDICES - Ottimizzato per scroll orizzontale su mobile */}
      <div className="w-full bg-white border-b border-gray-200 py-2 sticky top-0 z-50 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 flex items-center justify-between min-w-[600px] md:min-w-full lg:justify-center lg:gap-12">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#9E1B32] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Dati Real-Time</span>
          </div>
          <div className="text-xs font-medium">Euribor 1M: <span className="text-[#9E1B32] font-bold">{euribor.e1m}</span></div>
          <div className="text-xs font-medium border-x border-gray-100 px-6">Euribor 3M: <span className="text-[#9E1B32] font-bold">{euribor.e3m}</span></div>
          <div className="text-xs font-medium">IRS 1Y: <span className="text-[#C1A673] font-bold">2.220%</span></div>
          <div className="text-xs font-medium text-gray-400 uppercase tracking-tighter">Aggiornato: {new Date().toLocaleDateString()}</div>
        </div>
      </div>

      {/* 2. HERO SECTION - Stack verticale su mobile */}
      <section className="relative py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-[#9E1B32]/10 text-[#9E1B32] rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                Garanzia Pubblica MCC 80%
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ottieni fino a <span className="text-[#9E1B32]">140.000€</span> <br className="hidden md:block"/>
              per la tua Impresa
            </h1>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-[#C1A673] px-4 lg:pl-6">
              Il finanziamento che cambia le regole: <strong>100% Digitale</strong>, senza garanzie reali e con esito in 48 ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 md:px-0">
              <a href="#form" className="bg-[#9E1B32] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold uppercase text-xs md:text-sm shadow-xl hover:bg-[#7a1224] transition-all text-center">
                Richiedi Finanziamento Ora
              </a>
            </div>
            <p className="text-xs md:text-sm text-gray-400 italic">Compila il form: sarai ricontattato entro 24 ore</p>
          </div>

          <div className="bg-[#0F1E38] p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-2xl relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-[#C1A673] font-bold text-2xl md:text-3xl">€ 100.000</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Microcredito Imprenditoriale</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold text-2xl md:text-3xl">+ € 40.000</p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Finanziamento Ridotto</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                 <p className="text-xs md:text-sm leading-relaxed">
                   "Immagina un supporto concreto <strong>senza essere schiacciato dalla burocrazia</strong>."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COSA È IL MICROCREDITO - Grid ottimizzata */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter">Cosa è il <span className="text-[#9E1B32]">Microcredito</span>?</h2>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-6">
                È uno strumento assistito dalla garanzia del <strong>Fondo Centrale di Garanzia (FGC)</strong> per favorire l'accesso finanziario alle microimprese. 
                È regolato dal D.Lgs 385/1993 (Art. 111) e dal Decreto MEF 176/2014.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm">
                  <p className="text-[#9E1B32] font-bold text-lg md:text-xl">3-10 Anni</p>
                  <p className="text-[9px] md:text-[10px] uppercase text-gray-400">Durata flessibile</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm">
                  <p className="text-[#C1A673] font-bold text-lg md:text-xl">80%</p>
                  <p className="text-[9px] md:text-[10px] uppercase text-gray-400">Garanzia Statale</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold uppercase text-center lg:text-left">Finalità del Finanziamento</h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Acquisto beni e servizi (inclusi canoni leasing)",
                  "Costi per corsi di formazione",
                  "Pagamento retribuzioni nuovi dipendenti o soci",
                  "Copertura capitale circolante e liquidità"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-600 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="w-2 h-2 bg-[#C1A673] shrink-0 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERCHÉ È DIVERSO - Grid 1 colonna su mobile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-black mb-10 md:mb-16 uppercase">Perché scegliere la <span className="text-[#9E1B32]">Microfinanza Intelligente</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-[#F8F9FA] rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-bold mb-3 uppercase text-sm md:text-base">Zero Garanzie Reali</h4>
              <p className="text-xs md:text-sm text-gray-500">Non sono richieste ipoteche, pegni o fideiussioni personali. Lo Stato garantisce per te fino all'80%.</p>
            </div>
            <div className="p-6 md:p-8 bg-[#F8F9FA] rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-bold mb-3 uppercase text-sm md:text-base">100% Digitale</h4>
              <p className="text-xs md:text-sm text-gray-500">Firma con OTP su piattaforma certificata. Caricamento documenti semplice e guidato.</p>
            </div>
            <div className="p-6 md:p-8 bg-[#F8F9FA] rounded-2xl md:rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">👨‍🏫</div>
              <h4 className="font-bold mb-3 uppercase text-sm md:text-base">Tutoraggio Incluso</h4>
              <p className="text-xs md:text-sm text-gray-500">Supporto gratuito pre e post erogazione. Accompagnamento strategico nei primi 3 anni.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A CHI È RIVOLTO */}
      <section className="py-16 md:py-24 bg-[#0F1E38] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-10 md:mb-12 uppercase">A chi è rivolto?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                "Microimprese",
                "PMI",
                "Professionisti",
                "Start-up"
              ].map((target, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <p className="font-bold text-[10px] md:text-sm uppercase text-[#C1A673]">{target}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 md:mt-12 text-xs md:text-sm text-gray-400 px-4">
               Ideale per imprese costituite da meno di 5 anni (per microcredito puro) e Partite IVA attive.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DOCUMENTI & PROCESSO - Grid 1 colonna su tablet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-black mb-8 uppercase text-center lg:text-left">Processo Semplice</h3>
            <div className="space-y-6 md:space-y-8">
              {[
                { s: "Compila l'intervista", d: "Il cuore della tua richiesta" },
                { s: "Firma Digitale", d: "Modulistica privacy e antiriciclaggio" },
                { s: "Invia PDF", d: "Semplice, rapido, chiaro" },
                { s: "Verifica 48h", d: "Avvio rapido dell'istruttoria" },
                { s: "Erogazione", d: "Fondi direttamente sul tuo conto aziendale" }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="font-black text-[#9E1B32] text-lg md:text-xl shrink-0">0{i+1}</div>
                  <div>
                    <h5 className="font-bold uppercase text-[11px] md:text-sm">{step.s}</h5>
                    <p className="text-[10px] md:text-xs text-gray-400">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F8F9FA] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold mb-6 uppercase text-center lg:text-left">Documenti Necessari</h3>
            <ul className="grid grid-cols-1 gap-2 md:gap-3 text-[10px] md:text-xs text-gray-600">
              <li className="bg-white p-3 rounded-lg shadow-sm">ID + Codice Fiscale</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Visura Camerale (max 3 mesi)</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Attribuzione Partita IVA</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Ultime 2 Dichiarazioni Redditi</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Situazione Contabile Aggiornata</li>
              <li className="bg-white p-3 rounded-lg shadow-sm">Preventivi degli investimenti</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. CTA FINALE - Padding ridotto su mobile */}
      <section id="form" className="py-16 md:py-24 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 uppercase tracking-tight">Pronto al primo passo?</h2>
          <p className="text-sm md:text-base text-gray-500 mb-8 md:mb-12 px-4">I fondi sono limitati. Gestiamo 100 abilitazioni al mese. Chi prima agisce, ottiene.</p>
          <div className="bg-[#9E1B32] text-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[3rem] shadow-2xl hover:scale-[1.01] transition-transform mx-2">
              <h3 className="text-xl md:text-2xl font-bold mb-4">RICHIEDI ORA IL FINANZIAMENTO</h3>
              <p className="text-xs md:text-sm opacity-80 mb-6 md:mb-8 uppercase tracking-widest font-bold">Esito gratuito e senza impegno</p>
              <button className="bg-white text-[#9E1B32] px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                Inizia la richiesta
              </button>
          </div>
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] gap-4">
              <div>Credit-One S.p.A.</div>
              <div>OAM: M409 | P.IVA 13410651000</div>
              <div className="text-center md:text-right">Tutte le condizioni su credit-one.it</div>
          </div>
        </div>
      </section>

    </div>
  );
}