import { getBookings } from '@/lib/bookings';
import Link from 'next/link';

export default async function Home() {

    const bookings = await getBookings()

    return (
    <main className="p-4 lg:p-8">

      {/* Titre de la page */}
      <h1 className="text-center text-3xl my-8 font-bold">Liste des réservations</h1>

      {/* Liste des articles */}
      {bookings.map(booking => (
        <div key={booking.id} className="border rounded m-4">
          
          {/* Titre et contenu de l'article */}
          <h3 className="bg-[#436d9e] text-2xl rounded-t p-3">{booking.name}</h3>
          
          
          {/* Section des boutons */}
          <div className="bg-[#071e26] rounded-b flex justify-between items-center pr-2">
            <div className="flex">              
              {/* Bouton Éditer */}
              <Link 
                href={`/blog/${booking.id}`} 
                className="bg-amber-600 hover:bg-amber-500 border-2 border-amber-700 text-white rounded px-3 py-0.5 mt-3 mb-3"
              >
                Éditer
              </Link>
            </div>
          </div>

        </div>
      ))}
    </main>
  );   
}