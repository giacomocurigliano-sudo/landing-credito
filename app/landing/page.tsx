import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F1E38] font-sans selection:bg-[#C1A673] selection:text-white">
      
      {/* =================================================================================
          1. HERO SECTION
         ================================================================================= */}
      <section className="relative bg-[#0F1E38] text-white overflow-hidden min-h-[85vh] flex items-center">
        
        {/* SFONDO (Placeholder sicuro: Gradiente invece di immagine) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0F1E38] to-[#1a2b4a]">
            {/* Sostituisci questo DIV con il tag <Image ... /> quando avrai la foto */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center"></div> 
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C1A673] text-[#C1A673] rounded text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 bg-[#C1A673] rounded-full"></span>
                Mediazione Creditizia
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              IL FUTURO DEL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1A673] to-[#F2E5C8]">CREDITO.</span>
            </h1>
            <p className="text-xl text-blue-100/80 font-light leading-relaxed max-w-lg border-l-4 border-[#C1A673] pl-6">
              La più completa offerta di servizi finanziari per cittadini e imprese.
              Solidi, veloci, performanti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <a href="#contatti" className="bg-[#C1A673] text-[#0F1E38] px-10 py-5 rounded font-bold hover:bg-white transition-all duration-300 shadow-lg text-lg uppercase tracking-wider text-center">
                  Richiedi Ora
                 </a>
            </div>
          </div>
          
          {/* PLACEHOLDER IMMAGINE HERO / ROBOT */}
          <div className="hidden md:flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-3xl flex flex-col items-center justify-center text-white/50">
                  <span className="text-4xl mb-2">🖼️</span>
                  <span className="font-bold">QUI FOTO HERO/ROBOT</span>
                  <span className="text-xs">(Inserisci file in public e usa Next/Image)</span>
              </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          2. SERVIZI (Griglia)
         ================================================================================= */}
      <section id="servizi" className="py-24 bg-gray-50 container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E38] mb-6">La nostra <span className="text-[#D32F2F]">Offerta</span></h2>
            <p className="text-gray-600 text-lg">Scegli la soluzione adatta alle tue esigenze.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#D32F2F]">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase">LEASING</h3>
            <p className="text-gray-600 text-sm">Per la tua impresa: veicolare, strumentale, immobiliare.</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#0F1E38]">
             <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase">ANTICIPO T.F.S.</h3>
            <p className="text-gray-600 text-sm">Anticipiamo noi la tua liquidità in pochi giorni.</p>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#D32F2F]">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase">MUTUO</h3>
            <p className="text-gray-600 text-sm">Mutuo casa con predelibera veloce e tassi esclusivi.</p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#0F1E38]">
             <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase">FACTORING</h3>
            <p className="text-gray-600 text-sm">Smobilizza crediti e ottieni liquidità immediata.</p>
          </div>

          {/* Card 5 */}
          <div className="group bg-red-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#D32F2F]">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F] uppercase">PRESTITO PERSONALE</h3>
            <p className="text-gray-600 text-sm">Fino a 50.000€ per dipendenti e autonomi.</p>
          </div>
          
          {/* Card 6 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-[#0F1E38]">
             <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38] uppercase">CARTA IMPRESA</h3>
            <p className="text-gray-600 text-sm">Gestisci al meglio i pagamenti aziendali.</p>
          </div>

        </div>
      </section>

      {/* =================================================================================
          3. STATISTICHE (Senza immagine di sfondo per sicurezza)
         ================================================================================= */}
      <section className="py-24 bg-[#0F1E38] text-center text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Lo dicono <span className="text-[#C1A673]">i numeri</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#C1A673] mb-2">12k</p>
                    <p className="text-sm uppercase tracking-widest opacity-70">Richieste</p>
                </div>
                <div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#C1A673] mb-2">9.5k</p>
                    <p className="text-sm uppercase tracking-widest opacity-70">Clienti</p>
                </div>
                <div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#C1A673] mb-2">2.5k</p>
                    <p className="text-sm uppercase tracking-widest opacity-70">Pratiche</p>
                </div>
                <div>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#C1A673] mb-2">99%</p>
                    <p className="text-sm uppercase tracking-widest opacity-70">Successo</p>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. VIDEO & QUOTE (Placeholder)
         ================================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* VIDEO PLACEHOLDER */}
            <div className="w-full lg:w-1/2 bg-black/90 rounded-2xl flex items-center justify-center min-h-[300px] border-4 border-gray-100">
                 <div className="text-center">
                    <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer">
                        <span className="text-white text-2xl">▶</span>
                    </div>
                    <span className="text-white font-bold uppercase tracking-widest">Guarda Video</span>
                 </div>
            </div>

            {/* QUOTE */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-12 rounded-2xl flex flex-col justify-center border-l-8 border-[#0F1E38]">
                <h3 className="text-3xl font-bold mb-6 text-[#0F1E38]">Perché facciamo le cose per bene.</h3>
                <blockquote className="text-xl italic text-gray-600 mb-6">
                    "Non basta fare bene. Bisogna fare molto bene per garantire il futuro dei nostri clienti."
                </blockquote>
                <div>
                    <p className="font-bold text-[#0F1E38]">Giacomo Curigliano</p>
                    <p className="text-sm text-[#C1A673] uppercase font-bold">CEO Founder</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          5. NEWS (Placeholder Immagini)
         ================================================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0F1E38] mb-12">Ultime <span className="text-[#D32F2F]">News</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        {/* Placeholder Immagine News */}
                        <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500 font-bold border-b border-gray-100">
                            IMG NEWS {i}
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg text-[#0F1E38] mb-3">Titolo Notizia Finanziaria Importante</h3>
                            <p className="text-gray-500 text-sm mb-4">Descrizione breve della notizia per attirare l'attenzione del lettore...</p>
                            <span className="text-[#D32F2F] font-bold text-sm uppercase cursor-pointer">Leggi tutto →</span>
                        </div>
                     </div>
                 ))}
            </div>
        </div>
      </section>

      {/* =================================================================================
          6. CTA FINALE
         ================================================================================= */}
      <section id="contatti" className="py-20 bg-[#0F1E38] text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Parliamone.</h2>
            <p className="text-blue-200 text-xl mb-12 max-w-2xl mx-auto">
                Affidati agli specialisti del credito. Risposte in 24 ore.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="tel:800123456" className="bg-[#C1A673] text-[#0F1E38] px-12 py-5 rounded font-bold hover:bg-white transition-all duration-300 shadow-xl text-lg uppercase tracking-widest">
                    Chiama 800 123 456
                </a>
                <a href="mailto:info@credit-one.it" className="border border-white text-white px-12 py-5 rounded font-bold hover:bg-white hover:text-[#0F1E38] transition-all duration-300 text-lg uppercase tracking-widest">
                    Invia Email
                </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                Credit-One S.p.A. - P.IVA 12345678901
            </div>
         </div>
      </section>

    </main>
  );
}