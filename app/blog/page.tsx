import { getArticles, removeArticleAction } from '@/lib/blog'
import Link from 'next/link';

export default async function Home() {

  const articles = await getArticles()
  return (
    <main className="p-4 lg:p-8">
      {/* Titre de la page */}
      <h1 className="text-center text-3xl my-8 font-bold">Template 2</h1>

      {/* Liste des articles */}
      {articles.map(a => (
        <div key={a.id} className="border rounded m-4">
          
          {/* Titre et contenu de l'article */}
          <h3 className="bg-[#436d9e] text-2xl rounded-t p-3">{a.title}</h3>
          
          
          {/* Section des boutons */}
          <div className="bg-[#071e26] rounded-b flex justify-between items-center pr-2">
            <div className="flex">
              {/* Bouton Voir */}
              <Link 
                href={`/blog/${a.id}`} 
                className="bg-green-600 hover:bg-green-500 border-2 border-green-700 text-white rounded px-3 py-0.5 m-3"
              >
                Voir
              </Link>
              
              {/* Bouton Éditer */}
              <Link 
                href={`/blog/edit/${a.id}`} 
                className="bg-amber-600 hover:bg-amber-500 border-2 border-amber-700 text-white rounded px-3 py-0.5 mt-3 mb-3"
              >
                Éditer
              </Link>
            </div>

            {/* Formulaire de suppression */}
            <form action={removeArticleAction}>
              <input type="hidden" name="id" value={a.id} />
              <button type="submit" className="bg-red-600 border-red-700 hover:bg-red-400 hover:border-red-500 border-2 rounded px-2 pb-0.5 m-3">x</button>
            </form>
          </div>

        </div>
      ))}

      {/* Bouton de création en bas de page */}
      <div className="flex justify-center m-8">
        <Link 
          href="/blog/new" 
          className="bg-cyan-600 border-cyan-800 border-2 text-white rounded px-6 py-2 hover:bg-cyan-700 font-bold"
        >
          + Nouvel article
        </Link>
      </div>
    </main>
  );    
}