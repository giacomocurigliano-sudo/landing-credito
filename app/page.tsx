import Image from "next/image";
import Link from "next/link"; 
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. HEADER CON MENU E LOGO */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo (Se non hai caricato l'immagine, si vedrà un quadrato vuoto, non preoccuparti) */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={150} 
              height={50} 
              className="object-contain h-10 w-auto" 
            />
          </div>

          {/* MENU (Visibile solo su PC - "hidden md:flex") */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#" className="hover:text-blue-900 transition">Home</a>
            <a href="#prodotti" className="hover:text-blue-900 transition">Prodotti</a>
            <a href="#chi-siamo" className="hover:text-blue-900 transition">Chi Siamo</a>
          </nav>

          {/* Bottone Chiama */}
          <a href="tel:800123456" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold hover:bg-green-700 transition text-sm md:text-base">
            📞 Chiama
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Il Mutuo su Misura per Te, <br /> Approvato in 24 Ore.
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Analizziamo oltre 20 banche per trovare il tasso più basso del mercato. 
          </p>
          
          {/* MODULO CONTATTI VERO */}
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto mt-8 text-left text-gray-800">
            <h3 className="font-bold text-xl mb-4 text-center">Richiedi Fattibilità</h3>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="INSERISCI_QUI_LA_TUA_CHIAVE" />
              
              <div>
                <label className="block text-sm font-medium text-gray-600">Nome</label>
                <input type="text" name="name" required className="w-full mt-1 p-2 border rounded-md" placeholder="Mario Rossi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Telefono</label>
                <input type="tel" name="phone" required className="w-full mt-1 p-2 border rounded-md" placeholder="333 1234567" />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-blue-900 font-bold py-3 rounded-md hover:bg-yellow-400 transition">
                INVIA RICHIESTA
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. PRODOTTI (Con ID per il menu) */}
      <section id="prodotti" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Le Nostre Soluzioni</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Mutuo Prima Casa</h3>
            <p className="text-gray-600">Tassi fissi e variabili ai minimi storici. Copertura fino al 100%.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Cessione del Quinto</h3>
            <p className="text-gray-600">Per dipendenti e pensionati. Rata comoda in busta paga.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Prestiti Personali</h3>
            <p className="text-gray-600">Liquidità veloce per i tuoi progetti personali.</p>
          </div>
        </div>
      </section>

      {/* 4. NUOVA SEZIONE: CHI SIAMO (Con ID per il menu) */}
      <section id="chi-siamo" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
                {/* Qui potresti mettere una foto del team in futuro */}
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-500">
                    Foto Consulente / Team
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-blue-900">Chi Siamo</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Siamo un team di mediatori creditizi iscritti all'OAM con oltre 10 anni di esperienza. 
                    Il nostro obiettivo non è venderti un prodotto, ma trovare la banca che accetta la tua pratica.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Convenzioni con 20+ istituti bancari.</li>
                    <li>Consulenza trasparente e zero sorprese.</li>
                    <li>Assistenza fino al rogito notarile.</li>
                </ul>
            </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-sm border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-bold text-white">CreditoFacile S.r.l.</p>
          <p>P.IVA: 12345678901 - Iscrizione OAM n. M12345</p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Trasparenza</a>
          </div>
        </div>
      </footer>
    </main>
  );
}