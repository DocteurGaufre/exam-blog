import { editBooking, getBooking, removeBookingAction } from "@/lib/bookings";
import Link from 'next/link'

type BookingPageProps = {
  params: Promise<{ id: string }>
}

export default async function BookingPage(props: BookingPageProps) {
  const params = await props.params;
  const id = params.id; // On garde l'ID en string (UUID)
  const booking = await getBooking(id)

  // Gestion du cas où la réservation n'est pas trouvée
  if (!booking) {
    return (
      <div>
        <p>Réservation introuvalble</p>
        <Link href="/bookings">Retour à la liste des réservations</Link>
      </div>
    )
  }

  // Affichage de la réservation
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-center text-3xl my-8 font-bold">Modifier la réservation</h1>
      
      <form action={editBooking} className='border rounded-2xl p-6 shadow-lg bg-[#071e26]'>

        {/* ID caché pour que le serveur sache quelle réservation modifier */}
        <input type="hidden" name="id" value={booking.id} />

        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Nom :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="name" 
            defaultValue={booking.name} 
            required 
          />
        </label>
        
        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Numéro de téléphone :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="phone" 
            defaultValue={booking.phone} 
            required 
          />
        </label>

        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Nombre de personnes :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="people_number" 
            defaultValue={booking.people_number} 
            required 
          />
        </label>

        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Date :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="date" 
            defaultValue={booking.date} 
            required 
          />
        </label>

        <label className="block my-4">
          <span className="text-slate-50 block mb-2 font-bold">Heure :</span>
          <input 
            className="border w-full p-2 rounded" 
            name="hour" 
            defaultValue={booking.hour} 
            required 
          />
        </label>
        
        <div className="flex justify-between items-center mt-6">
          <Link href="/bookings" className="text-slate-300 hover:text-white underline">
            Annuler
          </Link>

          {/* Enregistrer */}
          <button type="submit" className="bg-amber-600 border-amber-800 hover:bg-amber-700 border-2 text-white rounded px-4 py-2 font-bold">
            Enregistrer
          </button>
        </div>
      </form>

      {/* Formulaire de suppression */}
      <form action={removeBookingAction}>
        <input type="hidden" name="id" value={booking.id} />
        <button type="submit" className="bg-red-600 border-red-700 hover:bg-red-400 hover:border-red-500 border-2 rounded px-4 py-2 m-3">Supprimer</button>
      </form>
    </div>
  )
}