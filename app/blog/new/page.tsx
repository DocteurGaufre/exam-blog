import { addArticle } from '@/lib/blog'
import Link from 'next/link'
import { Field } from '@/components/Field'
import { Button } from '@/components/Button'

export default function NewPostPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">

      {/* Titre de la page */}
      <h1 className="text-center text-3xl my-8 font-bold">Créer un nouvel article</h1>
      
      {/* Formulaire d'ajout d'article */}
      <form action={addArticle} className='border rounded p-6 shadow-lg bg-[#071e26] flex flex-col gap-6'>

        {/* Label et input pour le titre */}
        <Field 
          label="Titre :" 
          name="title" 
          placeholder="Titre de votre article" 
          required 
          // On stylise le conteneur (le label) pour empiler le texte et l'input
          className="flex flex-col gap-2 text-slate-50 font-bold"
          // On stylise l'input lui-même (surcharge du style par défaut si nécessaire)
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />
        
        {/* Label et textarea pour le contenu */}
        <label className="flex flex-col gap-2 text-slate-50 font-bold">
          Contenu :
          <textarea 
            className="border w-full p-2 h-40 rounded text-white font-normal" 
            name="content" 
            required 
            placeholder="Écrivez votre contenu ici..." 
          />
        </label>

        {/* Boutons d'annulation et de soumission */}
        <div className="flex justify-between items-center mt-2">
          <Link href="/blog" className="text-slate-300 hover:text-white underline">
            Annuler
          </Link>
          
          <Button 
            type="submit" 
            className="w-auto mx-5 bg-cyan-600 hover:bg-cyan-700 border-cyan-800 border-2"
          >
            Créer
          </Button>
        </div>
      </form>
    </div>
  )
}