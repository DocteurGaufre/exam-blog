//import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-zinc-50 dark:bg-black p-2">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Partie Gauche : Cercle Bleu Géant */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* On remplace rounded-2xl par rounded-full pour faire un cercle */}
          {/* On ajoute une couleur de fond (ex: bg-blue-600) */}
          <div className="w-full max-w-lg aspect-square bg-blue-600 rounded-full shadow-2xl">
            {/* Plus besoin du composant Image ici */}
          </div>
        </div>

        {/* Partie Droite : Texte d'intro */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#e2a760]">
            Bienvenue sur ce site !
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 items-center">
            <Link 
              href="/blog" 
              className="bg-[#e2a760] hover:bg-[#cb9656] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Page 2
            </Link>
            <Link 
              href="/cv" 
              className="bg-white dark:bg-zinc-800 border-2 border-[#e29a60] text-white font-bold py-3 px-6 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all"
            >
              Page 1
            </Link>

          </div>
        </div>

      </main>
    </div>
  );
}
