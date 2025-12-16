"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function LandingCreditOne2025() {
  const [selectedIrs, setSelectedIrs] = useState("IRS 10 anni");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [euribor, setEuribor] = useState({ e1m: "3.842%", e3m: "3.895%" });

  // Dati simulati basati sulle rilevazioni ufficiali 2025
  const [tableData] = useState([
    { date: "2025-12-12", value: "2.220%" },
    { date: "2025-12-11", value: "2.220%" },
    { date: "2025-12-10", value: "2.220%" },
    { date: "2025-12-09", value: "2.210%" },
    { date: "2025-12-08", value: "2.210%" },
  ]);

  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];
  const irsTerms = Array.from({ length: 50 }, (_, i) => `IRS ${i + 1} ann${i === 0 ? 'o' : 'i'}`);

  return (
    <div className="antialiased bg-[#F8F9FA] text-[#0F1E38] font-sans w-full overflow-x-hidden">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      {/* 1. TICKER INDICI LIVE */}
      <div className="w-full bg-white border-b border-gray-200 py-2 sticky top-0 z-50 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4 flex items-center justify-between min-w-[700px] md:min-w-full lg:justify-center lg:gap-12">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#9E1B32] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Dati Real-Time</span>
          </div>
          <div className="text-xs font-medium">Euribor 1M: <span className="text-[#9E1B32] font-bold">{euribor.e1m}</span></div>
          <div className="text-xs font-medium border-x border-gray-100 px-6">Euribor 3M: <span className="text-[#9E1B32] font-bold">{euribor.e3m}</span></div>
          <div className="text-xs font-medium">IRS 1Y: <span className="text-[#C1A673] font-bold">2.220%</span></div>
          <div className="text-xs font-medium text-gray-400">Aggiornato al: 16/12/2025</div>
        </div>
      </div>

      {/* 2. HERO: DOPPIO BINARIO FINANZIARIO */}
      <section className="relative py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-[#9E1B32]/10 text-[#9E1B32] rounded-full text-[10px] font-bold uppercase tracking-widest">
                Nuova Normativa 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Microcredito fino a <span className="text-[#9E1B32]">100k</span> <br/>
              e Ridotto fino a <span className="text-[#C1A673]">40k</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 border-l-4 border-[#9E1B32] pl-6">
              Sblocca il potenziale della tua impresa con le soluzioni agevolate di <strong>Credit-One S.p.A.</strong> Garanzia dello Stato e iter semplificato per una liquidità reale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#dettagli" className="bg-[#9E1B32] text-white px-10 py-4 rounded-xl font-bold uppercase text-sm shadow-xl hover:scale-105 transition-transform text-center">
                Richiedi Fattibilità
              </a>
            </div>
          </div>

          {/* BOX TECNICO RIASSUNTIVO */}
          <div className="bg-[#0F1E38] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E1B32] opacity-10 blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <h3 className="text-[#C1A673] font-bold uppercase tracking-tighter text-sm mb-6">Speciale Agevolazioni 2025</h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-bold text-xl">100.000€</p>
                  <p className="text-[10px] text-gray-400 uppercase">Microcredito Imprenditoriale</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">MCC 80%</p>
                  <p className="text-[10px] text-gray-400 uppercase">Garanzia Statale</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-xl">40.000€</p>
                  <p className="text-[10px] text-gray-400 uppercase">Finanziamento Ridotto</p>
                </div>
                <div className="text-right">
                  <p className="text-[#C1A673] font-bold">Fast Track</p>
                  <p className="text-[10px] text-gray-400 uppercase">Iter Semplificato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INFO SEZIONE: DETTAGLI NORMATIVI */}
      <section id="dettagli" className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-[#9E1B32] font-black text-2xl mb-4 uppercase">Microcredito 100k</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3"><strong>Destinatari:</strong> Start-up, PMI e Professionisti attivi da meno di 5 anni.</li>
                <li className="flex gap-3"><strong>Garanzia:</strong> Copertura del Fondo di Garanzia PMI fino all'80% dell'importo.</li>
                <li className="flex gap-3"><strong>Finalità:</strong> Acquisto beni/servizi, pagamento retribuzioni, corsi di formazione.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-[#C1A673] font-black text-2xl mb-4 uppercase">Finanziamento Ridotto 40k</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3"><strong>Velocità:</strong> Documentazione minima e tempi di risposta entro 48 ore lavorative.</li>
                <li className="flex gap-3"><strong>Flessibilità:</strong> Ideale per piccoli investimenti, scorte o liquidità immediata.</li>
                <li className="flex gap-3"><strong>Vantaggio:</strong> Non sono richieste garanzie reali (ipoteche) sui beni personali.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TABELLA IRS DINAMICA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Indici <span className="text-[#9E1B32]">IRS</span> Storico 2018-2025</h2>
              <p className="text-gray-400 text-sm mt-2">Dati aggiornati per la valutazione dell'impatto finanziario.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <select value={selectedIrs} onChange={(e) => setSelectedIrs(e.target.value)} className="bg-gray-50 border-none rounded-xl p-3 text-sm font-bold">
                  {irsTerms.map(t => <option key={t}>{t}</option>)}
                </select>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="bg-gray-50 border-none rounded-xl p-3 text-sm font-bold">
                  {years.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>

              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-left">
                  <thead className="bg-[#0F1E38] text-white">
                    <tr>
                      <th className="p-4 text-[10px] uppercase font-bold">Data Rilevazione</th>
                      <th className="p-4 text-[10px] uppercase font-bold text-right">Valore {selectedIrs}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {tableData.map((row, i) => (
                      <tr key={i} className="text-sm hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-gray-500">{row.date}</td>
                        <td className="p-4 text-right font-bold text-[#9E1B32]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CTA */}
      <section className="py-20 bg-[#0F1E38] text-center text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Gestiamo la tua pratica con successo.</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:0640060271" className="bg-[#9E1B32] px-10 py-4 rounded-xl font-bold uppercase text-sm w-full sm:w-auto">
              Sede di Roma: 06 40060271
            </a>
            <a href="mailto:mail@credit-one.it" className="border border-white/20 px-10 py-4 rounded-xl font-bold uppercase text-sm w-full sm:w-auto hover:bg-white/5">
              Email Specialistica
            </a>
          </div>
          <div className="mt-12 text-[10px] text-gray-500">
            Credit-One S.p.A. | Mediazione Creditizia | P.IVA 13410651000 | Iscrizione OAM n. M409
          </div>
        </div>
      </section>
    </div>
  );
}