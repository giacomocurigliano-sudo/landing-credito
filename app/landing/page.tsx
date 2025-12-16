"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function LandingMicrocredito() {
  // --- STATI PER I TASSI ---
  const [selectedIrs, setSelectedIrs] = useState("IRS 10 anni");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("Dicembre");
  const [euribor, setEuribor] = useState({ e1m: "3.842%", e3m: "3.895%" });

  // --- DATI TABELLA (Simulati per lo screenshot 2025) ---
  const [tableData, setTableData] = useState([
    { date: "2025-12-12", value: "2.220%" },
    { date: "2025-12-11", value: "2.220%" },
    { date: "2025-12-10", value: "2.220%" },
    { date: "2025-12-09", value: "2.210%" },
    { date: "2025-12-08", value: "2.210%" },
    { date: "2025-12-05", value: "2.180%" },
  ]);

  const years = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => (2025 - i).toString());
  const irsTerms = Array.from({ length: 50 }, (_, i) => `IRS ${i + 1} ann${i === 0 ? 'o' : 'i'}`);

  return (
    <div className="antialiased bg-[#F8F9FA] text-[#0F1E38] font-sans">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      {/* 1. BARRA TASSI LIVE (Sfondo Chiaro) */}
      <div className="w-full bg-white border-b border-gray-200 py-3 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#9E1B32] animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Live Indices</span>
          </div>
          <div className="text-sm font-medium">Euribor 1M: <span className="text-[#9E1B32] font-bold">{euribor.e1m}</span></div>
          <div className="text-sm font-medium border-x border-gray-200 px-8">Euribor 3M: <span className="text-[#9E1B32] font-bold">{euribor.e3m}</span></div>
          <div className="text-sm font-medium">IRS 1Y: <span className="text-[#C1A673] font-bold">2.220%</span></div>
        </div>
      </div>

      {/* 2. HERO SECTION (Colori Chiari & Moderni) */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F2F4F7] skew-x-[-12deg] translate-x-20 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#9E1B32]/10 text-[#9E1B32] rounded-full text-xs font-bold uppercase tracking-widest">
                Garanzia Statale MCC 80%
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#0F1E38]">
              Microcredito <br/>
              <span className="text-[#9E1B32]">Fino a 50.000€</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg border-l-4 border-[#C1A673] pl-6">
              Sostegno concreto per Start-up e PMI. Ottieni liquidità senza garanzie reali, con la forza di <strong>Credit-One S.p.A.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#verifica" className="bg-[#9E1B32] text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#7a1224] transition-all shadow-xl shadow-red-900/20 text-center">
                Verifica Requisiti
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#C1A673]/20 to-[#9E1B32]/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
                    <span className="font-bold text-gray-400 uppercase text-xs">Confronto Bancario</span>
                    <span className="font-black text-[#0F1E38] text-lg">Credit<span className="text-[#9E1B32]">One</span></span>
                </div>
                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Ipoteca Casa</span>
                        <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg">NESSUNA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Tempo Risposta</span>
                        <span className="text-[#C1A673] font-bold">48 ORE</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Approvazione</span>
                        <span className="text-white font-bold bg-[#0F1E38] px-3 py-1 rounded-lg">95%</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TABELLA IRS INTERATTIVA (Design Chiaro) */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Osservatorio <span className="text-[#9E1B32]">Tassi IRS</span></h2>
            <p className="text-gray-500">Monitoraggio storico e giornaliero per la tua pianificazione finanziaria.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#C1A673] uppercase ml-1">Seleziona Scadenza</label>
                <select value={selectedIrs} onChange={(e) => setSelectedIrs(e.target.value)} className="w-full bg-[#F8F9FA] border-none rounded-xl p-4 text-[#0F1E38] font-semibold focus:ring-2 focus:ring-[#9E1B32]">
                  {irsTerms.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#C1A673] uppercase ml-1">Anno</label>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full bg-[#F8F9FA] border-none rounded-xl p-4 text-[#0F1E38] font-semibold focus:ring-2 focus:ring-[#9E1B32]">
                  {years.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#C1A673] uppercase ml-1">Mese</label>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full bg-[#F8F9FA] border-none rounded-xl p-4 text-[#0F1E38] font-semibold focus:ring-2 focus:ring-[#9E1B32]">
                  {["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"].map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100">
              <table className="w-full text-left">
                <thead className="bg-[#0F1E38] text-white">
                  <tr>
                    <th className="p-5 font-bold uppercase text-xs tracking-widest">Data Rilevazione</th>
                    <th className="p-5 font-bold uppercase text-xs tracking-widest text-right">{selectedIrs}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 text-gray-600 font-medium">{row.date}</td>
                      <td className="p-5 text-right font-black text-[#9E1B32]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CONTACT */}
      <section id="verifica" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-8">Pronto a far decollare il tuo business?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:800123456" className="bg-[#0F1E38] text-white px-10 py-5 rounded-xl font-bold hover:bg-[#C1A673] transition-colors uppercase tracking-widest">
              Chiama Numero Verde
            </a>
            <a href="mailto:info@credit-one.it" className="border-2 border-[#0F1E38] text-[#0F1E38] px-10 py-5 rounded-xl font-bold hover:bg-gray-50 transition-colors uppercase tracking-widest">
              Richiedi Info Online
            </a>
          </div>
          <p className="mt-12 text-gray-400 text-xs">Credit-One S.p.A. | P.IVA 12345678901 | OAM M12345</p>
        </div>
      </section>
    </div>
  );
}