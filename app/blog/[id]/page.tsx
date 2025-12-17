import { getArticle } from '@/lib/blog'
import Link from 'next/link'

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const id = params.id; // On garde l'ID en string (UUID)
  const post = await getArticle(id)

  // Gestion du cas où l'article n'est pas trouvé
  if (!post) {
    return (
      <div>
        <p>Post non trouvé</p>
        <Link href="/blog">Retour à la liste</Link>
      </div>
    )
  }

  // Affichage de l'article
  return (
    <div>
      <h1 className="text-center text-3xl my-8 font-bold">{post.title}</h1>
      <div className='border rounded m-4 p-4 bg-[#071e26]'>
        <p className='py-2'>{post.content}</p>
        <Link href="/blog" className='bg-green-600 hover:bg-green-500 border-2 border-green-700 text-white rounded px-3 py-0.5'>Retour à la liste</Link>
      </div>
    </div>
  )
}