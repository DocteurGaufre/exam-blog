import CvEntry from "@/components/CvEntry";
import CvForm from "@/components/CvForm";
import { getCvEntries } from "@/lib/cv";

export default async function Cv() {
    // Récupération des données depuis la DB
    const entries = await getCvEntries();

    return (
        <div className="container mx-auto p-4">

            {/* TITRE PRINCIPAL */}
            <h1 className="text-center text-3xl my-8 font-bold">Curriculum Vitae</h1>

            <div className="lg:flex gap-6">
                
                {/* COLONNE GAUCHE : Formulaire + Info */}
                <aside className="lg:w-1/3 flex flex-col gap-6">
                    <section className="border border-slate-200 rounded-2xl p-4 shadow-sm">
                        <h2 className="font-bold text-xl mb-2">À propos</h2>
                        <p className="text-white">
                            Ajoutez des expériences via le formulaire ci-dessous pour remplir la liste à droite.
                        </p>
                    </section>

                    {/* Le formulaire d'ajout */}
                    <CvForm />
                </aside>

                {/* COLONNE DROITE : Liste des expériences */}
                <section className="lg:grow mt-8 lg:mt-0">
                    <h2 className="text-3xl mb-6 font-bold text-slate-800">EXPÉRIENCES</h2>

                    {entries.length === 0 ? (
                        <p className="italic text-slate-500">Aucune expérience ajoutée pour le moment.</p>
                    ) : (
                        entries.map((entry) => (
                            <CvEntry 
                                key={entry.id} 
                                title={entry.title} 
                                employer={entry.employer}
                            >
                                {/* On affiche la description stockée en DB */}
                                <p className="text-slate-100 whitespace-pre-line">
                                    {entry.description}
                                </p>
                            </CvEntry>
                        ))
                    )}
                </section>
            </div>
        </div>
    );
}