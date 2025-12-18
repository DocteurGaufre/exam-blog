import { getBookings } from '@/lib/bookings';
import Link from 'next/link';

export default async function Home() {

    const bookings = await getBookings()

    return (
    <div className="p-4 lg:p-8">

      {/* Titre de la page */}
      <h1 className="text-center text-3xl my-8 font-bold text-[#3c1e13]">Liste des réservations</h1>

      {/* Liste des réservations */}
      {bookings.map(booking => (
        <div key={booking.id} className="border rounded-xl m-4 bg-[#a15034] p-3">
          
          {/* Nom la réservation */}
          <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#e2a760]">Nom : {booking.name}</h3>
              <h3 className="italic">{booking.date} à {booking.hour}</h3>
          </div>

          <h3 className="italic ml-135">Nombre d'invités: {booking.people_number}</h3>

          {/* Bouton pour rediriger la personne vers la page d'édition */}
          <Link 
            href={`/bookings/${booking.id}`} 
            className="bg-amber-600 hover:bg-amber-500 border-2 border-amber-700 text-white rounded p-3 py-1"
          >
            Éditer la réservation
          </Link>

        </div>
      ))}
    </div>
  );   
}