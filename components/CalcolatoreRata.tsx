"use client";
import { useState, useEffect } from "react";

export default function CalcolatoreRata() {
  // Impostazioni iniziali (Default)
  const [importo, setImporto] = useState(150000);
  const [anni, setAnni] = useState(25);
  const [tasso, setTasso] = useState(3.5);
  const [rata, setRata] = useState("0");

  // La formula matematica finanziaria
  useEffect(() => {
    const calcola = () => {
      const r = tasso / 100 / 12; // Tasso mensile
      const n = anni * 12; // Numero rate totali
      
      if (tasso === 0) {
        setRata((importo / n).toFixed(2));
        return;
      }
      
      // Formula: R = C * (r * (1 + r)^n) / ((1 + r)^n - 1)
      const risultato = (importo * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setRata(risultato.toFixed(2));
    };
    
    calcola();
  }, [importo, anni, tasso]); // Ricalcola ogni volta che cambia un valore

  return (
    <div className="bg-white text-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-blue-100 max-w-lg mx-auto transform hover:-translate-y-1 transition duration-300">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-900">Simula la tua Rata</h3>
        <p className="text-gray-500 text-sm">Scopri quanto è conveniente oggi.</p>
      </div>
      
      <div className="space-y-6">
        {/* IMPORTO */}
        <div>
          <label className="flex justify-between font-bold text-gray-700 mb-2">
            <span>Importo Richiesto</span>
            <span className="text-blue-600">€ {importo.toLocaleString()}</span>
          </label>
          <input 
            type="range" min="30000" max="500000" step="5000" 
            value={importo} onChange={(e) => setImporto(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* DURATA E TASSO */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Durata</label>
                <select 
                    value={anni} 
                    onChange={(e) => setAnni(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="10">10 Anni</option>
                    <option value="15">15 Anni</option>
                    <option value="20">20 Anni</option>
                    <option value="25">25 Anni</option>
                    <option value="30">30 Anni</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Tasso (%)</label>
                <input 
                    type="number" step="0.1" 
                    value={tasso} 
                    onChange={(e) => setTasso(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>
        </div>

        {/* RISULTATO */}
        <div className="bg-blue-900 text-white p-6 rounded-xl text-center shadow-inner">
            <p className="text-xs opacity-70 uppercase tracking-widest mb-1">La tua rata mensile</p>
            <p className="text-4xl font-extrabold">€ {rata}</p>
        </div>
        
        {/* CTA */}
        <button className="w-full bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-md">
            RICHIEDI QUESTO MUTUO
        </button>
        
        <p className="text-[10px] text-center text-gray-400 mt-2">
            Il calcolo è indicativo. Tasso euribor 3 mesi + spread medio di mercato.
        </p>
      </div>
    </div>
  );
}