import Image from "next/image";
import Link from "next/link";

export default function LandingHomeCreditOne() {
  return (
    <main className="min-h-screen bg-white text-[#0F1E38] font-sans selection:bg-[#C1A673] selection:text-white">
      
      {/* =================================================================================
          1. HERO SECTION (Potente & Istituzionale)
          Colore: Blu Notte profondo delle immagini
         ================================================================================= */}
      <section className="relative bg-[#0F1E38] text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Sfondo Astratto Tecnologico */}
        <div className="absolute inset-0 z-0 opacity-40">
             {/* Se hai l'immagine "technology" usala qui, altrimenti questo gradiente simula l'effetto */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a3b6e] via-[#0F1E38] to-[#050a14]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C1A673] text-[#C1A673] rounded text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 bg-[#C1A673] rounded-full"></span>
                Credit-One S.p.A.
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              LA TUA RETE <br/>
              DI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1A673] to-[#F2E5C8]">ECCELLENZA.</span>
            </h1>
            <p className="text-xl text-blue-100/80 font-light leading-relaxed max-w-lg border-l-4 border-[#C1A673] pl-6">
              Un ecosistema finanziario unico per imprese e famiglie. 
              La più completa offerta di servizi sul mercato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <a href="#contatti" className="bg-[#C1A673] text-[#0F1E38] px-10 py-5 rounded font-bold hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(193,166,115,0.2)] text-lg uppercase tracking-wider text-center">
                  Richiedi Consulenza
                 </a>
            </div>
          </div>
          
          {/* Elemento Visivo (Robot/Tech) */}
          <div className="relative hidden md:block">
              {/* Cerchi decorativi stile "tech" */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#C1A673]/30 rounded-full"></div>
              
              {/* Qui andrebbe l'immagine del Robot/Tech se presente in public */}
              <div className="relative z-10 bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                 <div className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">24h</p>
                    <p className="text-sm text-gray-300 uppercase tracking-widest">Valutazione Istantanea</p>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          2. ECOSISTEMA (Griglia Servizi - Stile Immagini fornite)
          Colori: Sfondi chiari con accenti Rossi (#D32F2F) e Blu (#0F1E38)
         ================================================================================= */}
      <section id="servizi" className="py-24 bg-gray-50 container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E38] mb-6">La nostra <span className="text-[#D32F2F]">Offerta Finanziaria</span></h2>
            <p className="text-gray-600 text-lg">Incrociando tecnologia e competenze dei nostri analisti, ricevi la soluzione adeguata in pochi istanti.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Leasing (Rosso Chiaro) */}
          <div className="group bg-[#FFF5F5] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#D32F2F] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#D32F2F] text-white flex items-center justify-center font-bold rounded">A</span>
                <span className="text-3xl text-[#D32F2F]">🚗</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase tracking-wide">LEASING</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Per la tua impresa: veicolare, strumentale, immobiliare.</p>
          </div>

          {/* Card 2: Anticipo T.F.S. (Blu Chiaro) */}
          <div className="group bg-[#F0F4F8] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#0F1E38] relative overflow-hidden">
             <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#0F1E38] text-white flex items-center justify-center font-bold rounded">B</span>
                <span className="text-3xl text-[#0F1E38]">⚖️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase tracking-wide">ANTICIPO T.F.S.</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Non attendere, anticipiamo noi il tuo TFS ed in pochi giorni è tuo.</p>
          </div>
          
          {/* Card 3: Mutuo (Rosso Chiaro) */}
          <div className="group bg-[#FFF5F5] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#D32F2F] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#D32F2F] text-white flex items-center justify-center font-bold rounded">C</span>
                <span className="text-3xl text-[#D32F2F]">🏠</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase tracking-wide">MUTUO</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Il mutuo per la tua casa, con predelibera in pochi giorni.</p>
          </div>

          {/* Card 4: Factoring (Blu Chiaro) */}
          <div className="group bg-[#F0F4F8] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#0F1E38] relative overflow-hidden">
             <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#0F1E38] text-white flex items-center justify-center font-bold rounded">D</span>
                <span className="text-3xl text-[#0F1E38]">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase tracking-wide">FACTORING</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Smobilizza i tuoi crediti ed ottieni liquidità per la tua impresa.</p>
          </div>

          {/* Card 5: Prestito Personale (Rosso Chiaro) */}
          <div className="group bg-[#FFF5F5] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#D32F2F] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#D32F2F] text-white flex items-center justify-center font-bold rounded">E</span>
                <span className="text-3xl text-[#D32F2F]">👤</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase tracking-wide">PRESTITO PERSONALE</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Per dipendenti ed autonomi fino a 50.000€.</p>
          </div>
          
          {/* Card 6: Carta di Credito (Blu Chiaro) */}
          <div className="group bg-[#F0F4F8] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#0F1E38] relative overflow-hidden">
             <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 bg-[#0F1E38] text-white flex items-center justify-center font-bold rounded">F</span>
                <span className="text-3xl text-[#0F1E38]">💳</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase tracking-wide">CARTA DI CREDITO</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Per le imprese che vogliono gestire al meglio i pagamenti.</p>
          </div>

        </div>
      </section>

      {/* =================================================================================
          3. I NUMERI (Sfondo Grigio/Blu come immagine)
         ================================================================================= */}
      <section className="relative py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl font-bold text-[#0F1E38] mb-12">Lo dicono <span className="text-[#D32F2F]">i numeri</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                <div>
                    <div className="text-[#D32F2F] text-5xl mb-4 mx-auto">📂</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#D32F2F] mb-2">12365</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Richieste lavorate</p>
                </div>
                <div>
                    <div className="text-[#D32F2F] text-5xl mb-4 mx-auto">📊</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#D32F2F] mb-2">9526</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Clienti</p>
                </div>
                <div>
                    <div className="text-[#D32F2F] text-5xl mb-4 mx-auto">👤</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#D32F2F] mb-2">2500</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Pratiche annue</p>
                </div>
                <div>
                    <div className="text-[#D32F2F] text-5xl mb-4 mx-auto">😊</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#D32F2F] mb-2">99%</p>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Soddisfazione</p>
                </div>
            </div>
             <div className="mt-16">
                 <a href="#lavora" className="bg-[#D32F2F] text-white px-8 py-3 rounded font-bold hover:bg-[#b01e1e] transition-colors shadow-lg">Lavora con noi</a>
             </div>
        </div>
      </section>

      {/* =================================================================================
          4. GRUPPO E DIVISIONI (Il meglio di noi)
         ================================================================================= */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E38] mb-4">Il meglio <span className="text-[#D32F2F]">di noi</span></h2>
            <p className="text-gray-500 mb-16 uppercase tracking-widest text-sm">Quello che stavi cercando, adesso c'è</p>
            
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 opacity-80">
                 {/* Placeholder loghi divisioni - Stile pulito */}
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                     <div key={i} className="w-40 h-20 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-400">
                         LOGO PARTNER
                     </div>
                 ))}
            </div>
        </div>
      </section>

      {/* =================================================================================
          5. NEWS & BLOG
         ================================================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0F1E38] mb-12">Ultime <span className="text-[#D32F2F]">news</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {/* News Card Grande */}
                 <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#D32F2F]">
                    <h3 className="font-bold text-2xl text-[#0F1E38] mb-4 leading-tight">Accesso al credito, gli accordi di Basilea e l'importanza del rating aziendale</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Un'analisi approfondita su come le normative internazionali influenzano la capacità delle PMI italiane di accedere alla liquidità necessaria per la crescita.
                    </p>
                    <a href="#" className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider hover:underline">Leggi articolo →</a>
                 </div>

                 {/* News Card Grande */}
                 <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#0F1E38]">
                    <h3 className="font-bold text-2xl text-[#0F1E38] mb-4 leading-tight">La consulenza che ti fa stare tranquillo...</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Forti dell'esperienza e di alte competenze, i professionisti studiano costantemente le migliori soluzioni sul mercato.
                    </p>
                    <a href="#" className="text-[#0F1E38] font-bold text-sm uppercase tracking-wider hover:underline">Leggi articolo →</a>
                 </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          6. CTA FINALE (Scura e Potente)
         ================================================================================= */}
      <section id="contatti" className="py-20 bg-[#0F1E38] relative overflow-hidden text-center">
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pronto a partire?</h2>
            <div className="w-24 h-1 bg-[#C1A673] mx-auto mb-8"></div>
            <p className="text-blue-200 text-xl mb-12 max-w-2xl mx-auto">
                Entra in Credit-One. La solidità di un gruppo, l'agilità di un partner digitale.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="tel:800123456" className="bg-[#C1A673] text-[#0F1E38] px-12 py-5 rounded font-bold hover:bg-white transition-all duration-300 shadow-xl text-lg uppercase tracking-widest">
                    Chiama Ora
                </a>
                <a href="mailto:info@credit-one.it" className="border border-white text-white px-12 py-5 rounded font-bold hover:bg-white hover:text-[#0F1E38] transition-all duration-300 text-lg uppercase tracking-widest">
                    Invia Email
                </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                Credit-One S.p.A. - Iscrizione OAM n. M12345 - P.IVA 12345678901
            </div>
         </div>
      </section>

    </main>
  );
}