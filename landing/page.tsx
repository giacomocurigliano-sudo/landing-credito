import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-[#0F1E38] font-sans">
      
      {/* =================================================================================
          1. HERO SECTION (Moderna e Istituzionale)
         ================================================================================= */}
      <section className="relative bg-[#0F1E38] text-white overflow-hidden">
        {/* Sfondo con immagine e overlay */}
        <div className="absolute inset-0 z-0">
            {/* Assicurati di caricare un'immagine di sfondo chiamata 'hero-bg.jpg' in public */}
            <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E38] via-[#0F1E38]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-36 relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              LA PIÙ COMPLETA OFFERTA DI SERVIZI FINANZIARI PER CITTADINI E IMPRESE.
            </h1>
            <p className="text-xl text-blue-100/90 font-light leading-relaxed border-l-4 border-[#C1A673] pl-6">
              Solidi e performanti sul mercato, con la più ampia scelta di prodotti e servizi.
            </p>
            
            <div className="pt-8">
                 <a href="#contatti" className="bg-[#C1A673] text-[#0F1E38] px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(193,166,115,0.3)] uppercase tracking-wider inline-block">
                  Richiedi Finanziamento
                 </a>
            </div>
          </div>
        </div>

        {/* Elemento Decorativo Robot (Opzionale) */}
        <div className="absolute bottom-0 right-10 lg:right-32 transform translate-y-1/4 z-20 hidden lg:block">
            <div className="w-64 h-64 bg-gradient-to-t from-[#0F1E38] to-transparent rounded-full flex items-center justify-center p-2">
                 {/* Se hai l'immagine del robot caricala come robot.png */}
                 {/* <Image src="/robot.png" alt="AI Finanziaria" width={200} height={200} className="object-contain drop-shadow-2xl" /> */}
            </div>
        </div>
      </section>

      {/* =================================================================================
          2. SERVIZI (Grid Cards Potente)
         ================================================================================= */}
      <section id="servizi" className="py-24 bg-white container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E38]">La nostra <span className="text-[#D32F2F]">Offerta Finanziaria</span></h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Disponiamo della più vasta offerta di prodotti e servizi. Un ecosistema unico per imprese e famiglie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Leasing */}
          <div className="group bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0F1E38] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#0F1E38]">
                🚗
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">LEASING</h3>
            <p className="text-gray-600 leading-relaxed">Per la tua impresa: veicolare, strumentale, immobiliare.</p>
            <div className="mt-6 flex items-center text-[#C1A673] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Scopri di più →
            </div>
          </div>

          {/* Card 2: Anticipo T.F.S. */}
          <div className="group bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0F1E38] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#0F1E38]">
                ⚖️
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">ANTICIPO T.F.S./T.F.R.</h3>
            <p className="text-gray-600 leading-relaxed">Non attendere i tempi burocratici: anticipiamo noi la liquidità ed in pochi giorni è tua.</p>
            <div className="mt-6 flex items-center text-[#C1A673] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Richiedi ora →
            </div>
          </div>
          
          {/* Card 3: Mutuo */}
          <div className="group bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0F1E38] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#0F1E38]">
                🏠
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">MUTUO CASA</h3>
            <p className="text-gray-600 leading-relaxed">Il mutuo su misura con predelibera in pochi giorni. Tassi esclusivi.</p>
            <div className="mt-6 flex items-center text-[#C1A673] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Calcola rata →
            </div>
          </div>

          {/* Card 4: Factoring */}
          <div className="group bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0F1E38] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#0F1E38]">
                📊
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0F1E38]">FACTORING</h3>
            <p className="text-gray-600 leading-relaxed">Smobilizza i tuoi crediti commerciali ed ottieni liquidità immediata per la tua impresa.</p>
            <div className="mt-6 flex items-center text-[#C1A673] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Approfondisci →
            </div>
          </div>

          {/* Card 5: Prestito Personale (Evidenziato) */}
          <div className="group bg-red-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-[#D32F2F] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#D32F2F]">
                👤
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F]">PRESTITO PERSONALE</h3>
            <p className="text-gray-600 leading-relaxed">Per dipendenti, autonomi e pensionati. Fino a 50.000€ con esito veloce.</p>
            <div className="mt-6 flex items-center text-[#D32F2F] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Preventivo veloce →
            </div>
          </div>
          
          {/* Card 6: Cessione del Quinto */}
          <div className="group bg-red-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-[#D32F2F] relative overflow-hidden">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform text-[#D32F2F]">
                💼
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#D32F2F]">CESSIONE DEL QUINTO</h3>
            <p className="text-gray-600 leading-relaxed">La soluzione garantita per dipendenti e pensionati. Rata fissa e trattenuta diretta.</p>
            <div className="mt-6 flex items-center text-[#D32F2F] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Verifica fattibilità →
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================================
          3. STATS BAR (Lo dicono i numeri)
         ================================================================================= */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Immagine sfondo sfumata */}
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('/building.jpg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-16">Lo dicono <span className="text-[#D32F2F]">i numeri</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                    <div className="text-[#C1A673] text-4xl mb-2">📂</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">12.365</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Richieste lavorate</p>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                    <div className="text-[#C1A673] text-4xl mb-2">📊</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">9.526</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Clienti soddisfatti</p>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                    <div className="text-[#C1A673] text-4xl mb-2">👤</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">2.500</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Pratiche annue</p>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                    <div className="text-[#C1A673] text-4xl mb-2">😊</div>
                    <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">99%</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">Soddisfazione</p>
                </div>
            </div>

            <div className="mt-12">
                <a href="#lavoraconnoi" className="inline-block bg-[#D32F2F] text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition shadow-lg">
                    Lavora con noi
                </a>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. VIDEO & QUOTE SECTION (Perché facciamo le cose per bene)
         ================================================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Video Box */}
            <div className="w-full lg:w-1/2 bg-black rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,0,0,0.5)] cursor-pointer hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span className="font-medium tracking-wide">Guarda il video di presentazione</span>
                 </div>
            </div>

            {/* Quote Box Scuro */}
            <div className="w-full lg:w-1/2 bg-[#222222] p-12 rounded-2xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg className="w-32 h-32 text-white fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"/></svg>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">Perché facciamo <span className="text-white border-b-2 border-white/20 pb-1">le cose</span> <span className="text-gray-400">per bene!</span></h3>
                <blockquote className="text-xl font-light italic leading-relaxed text-gray-300 mb-8 border-l-4 border-[#C1A673] pl-6">
                    "Le cose non vanno fatte bene, ma molto bene!"
                </blockquote>
                <div>
                    <p className="font-bold text-white text-lg">Giacomo Curigliano</p>
                    <p className="text-sm text-[#C1A673] uppercase tracking-wider">(CEO)</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          5. GRUPPO E DIVISIONI (Layout Circolare)
         ================================================================================= */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E38] mb-4">Gruppo e <span className="text-[#D32F2F]">Divisioni</span></h2>
            <p className="text-gray-500 mb-16">Un network integrato di eccellenze al tuo servizio</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto">
                 {/* Qui dovresti inserire i loghi delle varie divisioni (ReBuilding, AssiOne, ecc.)
                     Usa dei placeholder eleganti per ora */}
                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="h-24 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition hover:-translate-y-1">
                        <span className="text-gray-400 font-bold">Partner Logo {item}</span>
                    </div>
                 ))}
            </div>
        </div>
      </section>

      {/* =================================================================================
          6. ULTIME NEWS (Design a schede)
         ================================================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-[#0F1E38]">Ultime <span className="text-[#D32F2F]">news</span></h2>
                    <p className="text-gray-500 mt-2">Resta aggiornato sul mondo del credito e della finanza.</p>
                </div>
                <a href="#blog" className="text-[#0F1E38] font-bold hover:text-[#D32F2F] transition underline">Vedi tutte le news</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* News Card 1 */}
                 <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                        {/* Placeholder Immagine News */}
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">Immagine News</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-[#0F1E38] mb-3 group-hover:text-[#D32F2F] transition-colors leading-tight">Accesso al credito e Rating Aziendale</h3>
                        <p className="text-gray-500 mb-6 text-sm line-clamp-3">L'importanza degli accordi di Basilea e come influenzano l'accesso al credito per le PMI italiane nel contesto attuale...</p>
                        <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                            Leggi l'articolo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </span>
                    </div>
                 </div>

                 {/* News Card 2 */}
                 <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                         <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">Immagine News</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-[#0F1E38] mb-3 group-hover:text-[#D32F2F] transition-colors leading-tight">La consulenza che ti fa stare tranquillo</h3>
                        <p className="text-gray-500 mb-6 text-sm line-clamp-3">I nostri professionisti studiano costantemente le migliori soluzioni sul mercato per garantire serenità e risultati...</p>
                        <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                            Leggi l'articolo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </span>
                    </div>
                 </div>

                 {/* News Card 3 */}
                 <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                         <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">Immagine News</div>
                    </div>
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-[#0F1E38] mb-3 group-hover:text-[#D32F2F] transition-colors leading-tight">Il futuro della Mediazione Creditizia</h3>
                        <p className="text-gray-500 mb-6 text-sm line-clamp-3">Come la tecnologia sta cambiando il rapporto tra banche, mediatori e clienti finali. Le nuove sfide del 2025...</p>
                        <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                            Leggi l'articolo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </span>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          7. CTA BANNER (Lavora con noi)
         ================================================================================= */}
      <section className="py-20 bg-[#0F1E38] relative overflow-hidden">
         {/* Pattern geometrico sfondo */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>
         
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-8 md:mb-0 text-center md:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Vuoi far parte del nostro successo?</h2>
                <h3 className="text-2xl text-[#C1A673] font-bold mb-4">Lavora con noi</h3>
                <p className="text-blue-200 text-lg">Entra in una rete altamente specializzata. Plasma il futuro del credito insieme a Credit-One.</p>
            </div>
            <a href="#carriere" className="group inline-flex items-center gap-4 bg-transparent border-2 border-[#C1A673] text-[#C1A673] px-10 py-4 rounded-full font-bold hover:bg-[#C1A673] hover:text-[#0F1E38] transition-all duration-300">
                <span className="uppercase tracking-widest text-sm">Invia candidatura</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
         </div>
      </section>

    </main>
  );
}