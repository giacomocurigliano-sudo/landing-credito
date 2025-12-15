import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* HEADER SEMPLIFICATO PER TORNARE INDIETRO */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="flex items-center text-blue-900 font-bold">
                ← Torna alla Home
            </Link>
             <a href="tel:800123456" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold hover:bg-green-700 transition text-sm">
            📞 Chiama
          </a>
        </div>
      </header>

      {/* SEZIONE 1: HERO EMOZIONALE */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Immagine di sfondo */}
        <Image 
            src="/about-hero.jpg" // Assicurati di avere questa immagine in public
            alt="Famiglia felice casa nuova"
            fill
            className="object-cover"
            priority
        />
        {/* Overlay scuro per leggere il testo */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Non siamo una Banca.<br/>Siamo i tuoi alleati.
         {/* Importalo in cima: import { motion } from "framer-motion"; */}

<section className="bg-blue-900 text-white py-16 md:py-24 overflow-hidden">
  <div className="container mx-auto px-4 text-center">
    
    {/* TITOLO ANIMATO */}
    <motion.h1 
      initial={{ opacity: 0, y: 50 }}      // Parte invisibile e spostato in basso
      animate={{ opacity: 1, y: 0 }}       // Diventa visibile e sale
      transition={{ duration: 0.8, ease: "easeOut" }} // Ci mette 0.8 secondi
      className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight"
    >
      Il Mutuo su Misura, <br /> Approvato in 24h.
    </motion.h1>

    {/* SOTTOTITOLO ANIMATO (con ritardo) */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }} // Parte dopo mezzo secondo
      className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
    >
      Analizziamo oltre 20 banche per trovare il tasso più basso del mercato. 
    </motion.p>
    
    {/* ... resto del codice (form contatti ecc) ... */}
  </div>
</section>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Trasformiamo il "NO" della burocrazia nel "SÌ" che realizza i tuoi progetti di vita.
          </p>
        </div>
      </section>

      {/* SEZIONE 2: IL PROBLEMA E LA SOLUZIONE (Storytelling) */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                 <Image 
                    src="/consulente.jpg" // TUA FOTO QUI in public
                    alt="Il nostro consulente" 
                    width={600} 
                    height={800} 
                    className="rounded-2xl shadow-2xl object-cover" 
                />
            </div>
            <div className="md:w-1/2">
                <h4 className="text-blue-600 font-bold tracking-wider uppercase mb-2">La nostra filosofia</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Perché ottenere credito è diventato così difficile?</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Sappiamo cosa si prova. Entri in banca pieno di speranze per la casa dei tuoi sogni, e ne esci sommerso da richieste di documenti incomprensibili, con la sensazione di essere solo un numero.
                    </p>
                    <p>
                        Le banche oggi hanno algoritmi rigidi. Basta una virgola fuori posto per vedere rifiutata una pratica solida.
                    </p>
                    <p className="font-bold text-blue-900 text-xl">
                        È qui che entriamo in gioco noi.
                    </p>
                    <p>
                        Come mediatori creditizi certificati OAM, noi non lavoriamo per una banca. **Lavoriamo per te.** Conosciamo le politiche interne di oltre 20 istituti e sappiamo esattamente come presentare la tua pratica alla banca giusta, nel modo giusto.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SEZIONE 3: LE NOSTRE SOLUZIONI CONCRETE (Il Processo) */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">Il nostro metodo in 3 passi</h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                  {/* Passo 1 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition duration-300">
                      <div className="absolute top-0 right-0 bg-blue-100 text-blue-900 font-bold text-6xl opacity-20 p-4 leading-none">1</div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900 relative z-10">Analisi Strategica</h3>
                      <p className="text-gray-600 relative z-10">Non inviamo richieste a caso. Prima analizziamo la tua situazione reddituale e CRIBIS per individuare i punti di forza e debolezza, preselezionando solo le banche compatibili.</p>
                  </div>
                  {/* Passo 2 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition duration-300">
                      <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-600 font-bold text-6xl opacity-20 p-4 leading-none">2</div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900 relative z-10">Negoziazione Diretta</h3>
                      <p className="text-gray-600 relative z-10">Sfruttiamo il nostro potere contrattuale. Parliamo direttamente con i deliberanti delle banche per ottenere condizioni (tassi e LTV) che difficilmente otterresti da solo allo sportello.</p>
                  </div>
                  {/* Passo 3 */}
                   <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition duration-300">
                      <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-bold text-6xl opacity-20 p-4 leading-none">3</div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-900 relative z-10">Assistenza Totale</h3>
                      <p className="text-gray-600 relative z-10">Dalla raccolta documenti fino al giorno del rogito dal notaio, siamo al tuo fianco. Gestiamo noi la burocrazia, tu devi solo pensare a scegliere i mobili.</p>
                  </div>
              </div>
          </div>
      </section>

       {/* CTA FINALE */}
       <section className="py-20 bg-blue-900 text-white text-center">
           <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold mb-8">Smetti di sognare, inizia a realizzare.</h2>
               <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-200">La prima consulenza di fattibilità è sempre gratuita e senza impegno. Scopri oggi quanto puoi ottenere.</p>
               <Link href="/" className="bg-yellow-500 text-blue-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-400 transition inline-block shadow-lg">
                   Richiedi la tua Analisi Gratuita in Home Page
               </Link>
           </div>
       </section>

    </main>
  );
}