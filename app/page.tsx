import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. HEADER SEMPLICE */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">CreditoFacile</div>
          <a href="tel:800123456" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold hover:bg-green-700 transition">
            📞 Chiama Ora
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION (La parte più importante) */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Il Mutuo su Misura per Te, <br /> Approvato in 24 Ore.
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Analizziamo oltre 20 banche per trovare il tasso più basso del mercato. 
            Consulenza gratuita e senza impegno.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition">
              Richiedi Preventivo Gratuito
            </button>
          </div>
          <p className="mt-4 text-sm text-blue-200">Già aiutato 1.500+ famiglie quest'anno.</p>
        </div>
      </section>

      {/* 3. I SERVIZI (Punti Chiave) */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">Mutuo Prima Casa</h3>
            <p className="text-gray-600">Tassi fissi e variabili ai minimi storici. Copertura fino al 100% del valore.</p>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">Cessione del Quinto</h3>
            <p className="text-gray-600">Dedicato a dipendenti e pensionati. Rata trattenuta direttamente in busta paga.</p>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">Prestiti Personali</h3>
            <p className="text-gray-600">Liquidità veloce per i tuoi progetti. Esito immediato e procedure snelle.</p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER LEGALE (Obbligatorio OAM) */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-bold text-white">CreditoFacile S.r.l.</p>
          <p>P.IVA: 12345678901 - Via Roma 10, Milano</p>
          <p className="mt-2 text-yellow-500 font-mono">
            Iscrizione OAM n. M12345
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Trasparenza</a>
          </div>
          <p className="mt-6 text-xs text-gray-600">
            Messaggio pubblicitario con finalità promozionale. Per le condizioni contrattuali si rimanda ai fogli informativi...
          </p>
        </div>
      </footer>
    </main>
  );
}