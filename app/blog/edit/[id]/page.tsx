import { getArticle, editArticle } from '@/lib/blog'
import Link from 'next/link';

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const id = params.id;
  const post = await getArticle(id)

  if (!post) {
    return <div>Article introuvable</div>
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-center text-3xl my-8 font-bold">Modifier l'article</h1>
      
      <form action={editArticle} className='border rounded p-6 shadow-lg bg-[#071e26]'>
        {/* ID caché pour que le serveur sache quel article modifier */}
        <input type="hidden" name="id" value={post.id} />

        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Titre :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="title" 
            defaultValue={post.title} 
            required 
          />
        </label>
        
        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Contenu :</span>
          <textarea 
            className="border w-full p-2 h-40 rounded" 
            name="content" 
            defaultValue={post.content} 
            required 
          />
        </label>
        
        <div className="flex justify-between items-center mt-6">
          <Link href="/blog" className="text-slate-300 hover:text-white underline">
            Annuler
          </Link>
          <button type="submit" className="bg-amber-600 border-amber-800 border-2 text-white rounded px-4 py-2 hover:bg-amber-700 font-bold">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  )
}