import { addBooking } from '@/lib/bookings'
import { Field } from '@/components/Field'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      
      {/* Titre principale */}
      <h1 className='text-center text-3xl my-8 font-bold'>Bienvenue au Restaurant !</h1> 

      {/* Titre secondaire */}
      <h2 className="text-center text-2xl my-4">Créer une nouvelle réservation</h2>

      {/* Formulaire de réservation */}
      <form action={addBooking} className='border rounded-2xl p-6 shadow-lg bg-[#071e26] flex flex-col'>

        {/* Nom */}
        <Field 
          label="Nom :" 
          name="name" 
          placeholder="ex : Michel" 
          required 
          className="flex flex-col my-2 text-slate-50 font-bold"
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />

        {/* Numéro de téléphone */}
        <Field 
          label="Numéro de téléphone :" 
          name="phone" 
          placeholder="ex : 0485 44 55 84" 
          required 
          className="flex flex-col my-2 text-slate-50 font-bold"
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />
        
        {/* Nombre de personnes */}
        <Field 
          label="Nombre de personnes" 
          name="people_number" 
          placeholder="ex : 2" 
          required 
          className="flex flex-col my-2 text-slate-50 font-bold"
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />

        {/* Date */}
        <Field 
          label="Date :" 
          name="date" 
          placeholder="ex : 11/02/2026" 
          required 
          className="flex flex-col my-2 text-slate-50 font-bold"
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />
        
        {/* Heure */}
        <Field 
          label="Heure :" 
          name="hour" 
          placeholder="ex : 11h45" 
          required 
          className="flex flex-col my-2 text-slate-50 font-bold"
          inputClassName="border w-full p-2 rounded text-white font-normal"
        />

        {/* Bouton pour valider la réservation */}
        <Button 
          type="submit" 
          className="w-auto my-3 bg-cyan-600 hover:bg-cyan-700 border-cyan-800 border-2"
        >
          Réserver
        </Button>
      </form>
    </div>
  );
}
