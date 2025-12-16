"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function LandingMicrocredito() {
  // Stati per i filtri della tabella
  const [selectedIrs, setSelectedIrs] = useState("IRS 10 anni");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("Dicembre");

  // Dati simulati per l'aggiornamento automatico
  const [tableData, setTableData] = useState([
    { date: "2025-12-12", value: "2.220%" },
    { date: "2025-12-11", value: "2.220%" },
    { date: "2025-12-10", value: "2.220%" },
    { date: "2025-12-09", value: "2.210%" },
    { date: "2025-12-08", value: "2.210%" },
  ]);

  // Generazione dinamica degli anni (2018-2025) e scadenze IRS (1-50)
  const years = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => (2025 - i).toString());
  const irsTerms = Array.from({ length: 50 }, (_, i) => `IRS ${i + 1} ann${i === 0 ? 'o' : 'i'}`);

  return (
    <div className="antialiased">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.contentWindow.min.js" 
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[#0F1E38] text-white font-sans overflow-hidden">
        
        {/* =================================================================================
            TABELLA INDICI DINAMICA (Aggiornamento Automatico)
           ================================================================================= */}
        <section className="py-16 container mx-auto px-6 relative z-30">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#C1A673]/20">
            
            {/* Header Tabella con Filtri */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-[#C1A673] font-bold text-sm uppercase mb-2">Indice</label>
                <select 
                  value={selectedIrs}
                  onChange={(e) => setSelectedIrs(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-[#0F1E38] rounded-xl p-3 focus:ring-2 focus:ring-[#9E1B32] outline-none"
                >
                  {irsTerms.map(term => <option key={term} value={term}>{term}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[#C1A673] font-bold text-sm uppercase mb-2">Anno</label>
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-[#0F1E38] rounded-xl p-3 focus:ring-2 focus:ring-[#9E1B32] outline-none"
                >
                  {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[#C1A673] font-bold text-sm uppercase mb-2">Mese (Ultimo Anno)</label>
                <select 
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-[#0F1E38] rounded-xl p-3 focus:ring-2 focus:ring-[#9E1B32] outline-none"
                >
                  {["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tabella Dati */}
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F1E38] text-[#C1A673] uppercase text-xs tracking-widest">
                    <th className="p-4 border-b border-[#C1A673]/20">Data</th>
                    <th className="p-4 border-b border-[#C1A673]/20">{selectedIrs}</th>
                  </tr>
                </thead>
                <tbody className="text-[#0F1E38]">
                  {tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="p-4 font-medium">{row.date}</td>
                      <td className="p-4 font-bold text-[#9E1B32]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-[10px] text-gray-400 italic text-center">
              Dati aggiornati automaticamente in base alle rilevazioni giornaliere dei mercati interbancari.
            </div>
          </div>
        </section>

        {/* ... (Inserisci qui il resto del codice Hero e Landing precedente) ... */}

      </main>
    </div>
  );
}