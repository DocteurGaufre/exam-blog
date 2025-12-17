import { addArticle } from '@/lib/blog'
import Link from 'next/link'

export default function NewPostPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-center text-3xl my-8 font-bold">Créer un nouvel article</h1>
      
      <form action={addArticle} className='border rounded p-6 shadow-lg bg-[#071e26]'>
        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Titre :</span>
          <input className="border w-full p-2 rounded" name="title" required placeholder="Titre de votre article" />
        </label>
        
        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Contenu :</span>
          <textarea className="border w-full p-2 h-40 rounded" name="content" required placeholder="Écrivez votre contenu ici..." />
        </label>
        
        <div className="flex justify-between items-center mt-6">
          <Link href="/blog" className="text-slate-300 hover:text-white underline">
            Annuler
          </Link>
          <button type="submit" className="bg-cyan-600 border-cyan-800 border-2 text-white rounded px-4 py-2 hover:bg-cyan-700 font-bold">
            Créer
          </button>
        </div>
      </form>
    </div>
  )
}