"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Assicurati che il file CalcolatoreRata.tsx esista in components
import CalcolatoreRata from "@/components/CalcolatoreRata"; 

export default function Home() {
  const [menuAperto, setMenuAperto] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-[#0F1E38] font-sans selection:bg-[#C1A673] selection:text-white">
      
      {/* =================================================================================
          1. HEADER "CREDIT-ONE STYLE"
         ================================================================================= */}
      <header className="bg-white/95 backdrop-blur-md py-5 sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO (Visibile a Sinistra su Mobile e Desktop) */}
          <div className="flex items-center">
             <Link href="/" className="flex items-center mr-8">
                 {/* Assicurati di avere logo.png in public */}
                <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={160} 
                    height={50} 
                    className="h-10 w-auto object-contain" 
                    priority 
                />
             </Link>
          </div>

          {/* MENU DESKTOP CENTRATO */}
          <nav className="hidden md:flex w-full items-center justify-center gap-10 text-[13px] font-bold tracking-widest uppercase">
            
            <Link href="/" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">
              Home
            </Link>

            <Link href="/chi-siamo" className="text-[#C1A673] hover:text-[#9e8659] transition-colors duration-300">
              Chi Siamo
            </Link>

            {/* BOTTONE A PILLOLA */}
            <Link href="#riconfigurazione" className="border-[1.5px] border-[#0F1E38] text-[#0F1E38] px-8 py-2.5 rounded-full hover:bg-[#0F1E38] hover:text-white transition-all duration-300 transform hover:scale-105">
              Riconfigurazione
            </Link>

            <Link href="#servizi" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">
              Servizi
            </Link>

            <Link href="/blog" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">
              Blog
            </Link>

            <Link href="#contatti" className="text-[#0F1E38] hover:text-[#C1A673] transition-colors duration-300">
              Contatti
            </Link>

          </nav>

          {/* Icona Hamburger Mobile */}
          <div className="md:hidden">
            <button 
                className="text-[#0F1E38] p-2"
                onClick={() => setMenuAperto(!menuAperto)}
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuAperto ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile a Tendina */}
        {menuAperto && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-2xl flex flex-col p-8 space-y-6 text-center z-50 animate-fade-in-down">
                <Link href="/" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">HOME</Link>
                <Link href="/chi-siamo" onClick={() => setMenuAperto(false)} className="text-[#C1A673] font-bold text-lg">CHI SIAMO</Link>
                <Link href="#riconfigurazione" onClick={() => setMenuAperto(false)} className="bg-[#0F1E38] text-white px-8 py-3 rounded-full mx-auto inline-block font-bold shadow-lg">RICONFIGURAZIONE</Link>
                <Link href="#servizi" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">SERVIZI</Link>
                <Link href="/blog" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">BLOG</Link>
                <Link href="#contatti" onClick={() => setMenuAperto(false)} className="text-[#0F1E38] font-bold text-lg">CONTATTI</Link>
            </div>
        )}
      </header>

      {/* =================================================================================
          2. HERO SECTION "ULTRA PREMIUM"
         ================================================================================= */}
      <section className="relative bg-gradient-to-br from-[#0F1E38] via-[#162a4d] to-[#0a1529] text-white py-20 lg:py-32 overflow-hidden">
        
        {/* Decorazione Sfondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C1A673] rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl mix-blend-overlay opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Testo Hero */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#C1A673]/30 bg-[#C1A673]/10 text-[#C1A673] text-xs font-bold tracking-widest uppercase mb-2">
                Mediazione Creditizia Certificata OAM
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Il Tuo Futuro <br />
                Merita <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1A673] to-[#e3d0a6]">Credito.</span>
              </h1>
              <p className="text-lg text-blue-100/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Non siamo una banca, siamo il tuo vantaggio competitivo. 
                Confrontiamo oltre 20 istituti per garantirti le condizioni che meriti, 
                non quelle che ti vengono imposte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                 <a href="#prodotti" className="bg-[#C1A673] text-[#0F1E38] px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(193,166,115,0.3)]">
                  Inizia la Valutazione
                 </a>
                 <a href="#contatti" className="px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition text-white">
                  Parla con un Esperto
                 </a>
              </div>
              
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-blue-200/60 font-medium">
                <span className="flex items-center gap-2">✓ Zero spese anticipate</span>
                <span className="flex items-center gap-2">✓ Esito in 24h</span>
              </div>
            </div>

            {/* Calcolatore Fluttuante */}
            <div className="lg:w-1/2 w-full">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#C1A673] blur-2xl opacity-20 transform rotate-3 scale-95 rounded-3xl"></div>
                    <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
                        <CalcolatoreRata />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================================
          3. STATS BAR
         ================================================================================= */}
      <section className="bg-[#0F1E38] border-t border-white/10 py-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">20+</p>
                    <p className="text-xs text-[#C1A673] uppercase tracking-widest">Banche Partner</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">€50M+</p>
                    <p className="text-xs text-[#C1A673] uppercase tracking-widest">Erogato 2024</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">1.500+</p>
                    <p className="text-xs text-[#C1A673] uppercase tracking-widest">Clienti Felici</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">24h</p>
                    <p className="text-xs text-[#C1A673] uppercase tracking-widest">Tempo Medio Risposta</p>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          4. SERVIZI
         ================================================================================= */}
      <section id="servizi" className="py-24 bg-gray-50 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#C1A673] font-bold tracking-widest uppercase text-sm mb-3">Le Nostre Soluzioni</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1E38]">Prodotti Finanziari d'Eccellenza</h3>
            <p className="text-gray-600 mt-4">Scegliamo solo il meglio del mercato. Soluzioni sartoriali per ogni esigenza di liquidità.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0F1E38] group-hover:h-2 transition-all duration-300"></div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🏠</div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Mutuo Prima Casa</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Accedi a tassi esclusivi riservati ai broker. Gestiamo noi la burocrazia fino al rogito.</p>
            <a href="#" className="text-[#0F1E38] font-bold text-sm border-b-2 border-[#C1A673] pb-1 hover:text-[#C1A673] transition">SCOPRI DI PIÙ</a>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C1A673] group-hover:h-2 transition-all duration-300"></div>
            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Cessione del Quinto</h3>
            <p className="text-gray-500 leading-relaxed mb-6">La liquidità semplice per dipendenti e pensionati. Rata fissa, trattenuta diretta, zero pensieri.</p>
            <a href="#" className="text-[#0F1E38] font-bold text-sm border-b-2 border-[#C1A673] pb-1 hover:text-[#C1A673] transition">CALCOLA RATA</a>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0F1E38] group-hover:h-2 transition-all duration-300"></div>
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-2xl font-bold mb-3 text-[#0F1E38]">Prestiti Personali</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Realizza i tuoi progetti in 48 ore. Tassi competitivi e piani di rientro flessibili.</p>
            <a href="#" className="text-[#0F1E38] font-bold text-sm border-b-2 border-[#C1A673] pb-1 hover:text-[#C1A673] transition">RICHIEDI ORA</a>
          </div>
        </div>
      </section>

      {/* =================================================================================
          5. CHI SIAMO
         ================================================================================= */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Immagine */}
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C1A673] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0F1E38] rounded-full opacity-10"></div>
                    {/* Placeholder per immagine */}
                    <div className="relative bg-gray-100 h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-gray-200">
                         <span className="text-gray-400 font-medium">Foto Team / Ufficio</span>
                    </div>
                </div>

                {/* Testo */}
                <div className="lg:w-1/2">
                    <h2 className="text-[#C1A673] font-bold tracking-widest uppercase text-sm mb-3">La Nostra Mission</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0F1E38] mb-6">Non Vendiamo Sogni, <br/> Finanziamo Realtà.</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        In un mercato bancario sempre più complesso, il "Fai da Te" è un rischio. 
                        Credit-One nasce per ribaltare il tavolo: non sei tu a dover convincere la banca, 
                        siamo noi a far competere le banche per averti come cliente.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0F1E38] font-bold">1</div>
                            <div>
                                <h4 className="font-bold text-[#0F1E38]">Analisi CRIF Gratuita</h4>
                                <p className="text-sm text-gray-500">Verifichiamo la tua affidabilità prima di inviare pratiche.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-[#C1A673] font-bold">2</div>
                            <div>
                                <h4 className="font-bold text-[#0F1E38]">Negoziazione Diretta</h4>
                                <p className="text-sm text-gray-500">Parliamo direttamente con i deliberanti, non con gli sportelli.</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/chi-siamo" className="text-[#0F1E38] font-bold border-b-2 border-[#0F1E38] pb-1 hover:text-[#C1A673] hover:border-[#C1A673] transition">
                        CONOSCI IL TEAM →
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          6. FOOTER
         ================================================================================= */}
      <footer className="bg-[#0F1E38] text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                {/* Colonna 1: Brand */}
                <div>
                    <h4 className="text-2xl font-extrabold mb-6 tracking-tighter">CREDIT-ONE</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Società di mediazione creditizia leader in Italia. 
                        Trasformiamo le possibilità in opportunità concrete.
                    </p>
                    <div className="text-sm text-[#C1A673] font-bold">
                        Iscr. OAM n. M12345
                    </div>
                </div>

                {/* Colonna 2: Link */}
                <div>
                    <h5 className="font-bold mb-6">Navigazione</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/chi-siamo" className="hover:text-white transition">Chi Siamo</Link></li>
                        <li><Link href="#servizi" className="hover:text-white transition">Prodotti</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition">News & Blog</Link></li>
                    </ul>
                </div>

                {/* Colonna 3: Legale */}
                <div>
                    <h5 className="font-bold mb-6">Trasparenza</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Reclami</a></li>
                        <li><a href="#" className="hover:text-white transition">Guide Banca d'Italia</a></li>
                    </ul>
                </div>

                {/* Colonna 4: Contatti */}
                <div>
                    <h5 className="font-bold mb-6">Contattaci</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>Via Roma 1, Milano (MI)</li>
                        <li><a href="mailto:info@credit-one.it" className="hover:text-[#C1A673]">info@credit-one.it</a></li>
                        <li><a href="tel:800123456" className="hover:text-[#C1A673] font-bold">800 123 456</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                <p>&copy; 2024 Credit-One S.p.A. - P.IVA 12345678901 - Tutti i diritti riservati.</p>
                <p className="mt-2">Messaggio pubblicitario con finalità promozionale.</p>
            </div>
        </div>
      </footer>

    </main>
  );
}