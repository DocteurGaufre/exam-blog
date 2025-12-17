import CvEntry from "@/components/CvEntry";
import CvForm from "@/components/CvForm";
import { getCvEntries, removeCvEntryAction } from "@/lib/cv";

export default async function Cv() {
    const entries = await getCvEntries();

    return (
        <div className="container mx-auto p-4">

            {/* Titre de la page */}
            <h1 className="text-center text-3xl my-8 font-bold">Template 1</h1>

            <div className="lg:flex gap-6">

                {/* Sidebar avec formulaire */}
                <aside className="lg:w-1/3 flex flex-col gap-6">
                    <section className="border border-slate-200 rounded-2xl p-4 shadow-sm">
                        <h2 className="font-bold text-xl mb-2">À propos</h2>
                        <p className="text-slate-600">
                            Gérez vos expériences ici.
                        </p>
                    </section>
                    <CvForm />
                </aside>

                {/* Liste des expériences */}
                <section className="lg:grow mt-8 lg:mt-0">
                    <h2 className="text-3xl mb-6 font-bold text-slate-400">EXPÉRIENCES</h2>

                    {entries.length === 0 ? (
                        <p className="italic text-slate-500">Aucune expérience.</p>
                    ) : (
                        entries.map((entry) => (
                            <CvEntry 
                                key={entry.id} 
                                title={entry.title} 
                                employer={entry.employer}
                            >
                                <p className="text-slate-100 whitespace-pre-line mb-4">
                                    {entry.description}
                                </p>

                                {/* Bouton de suppression aligné à droite */}
                                <div className="flex justify-end border-t border-blue-400/30 pt-2">
                                    <form action={removeCvEntryAction}>
                                        <input type="hidden" name="id" value={entry.id} /> {/* serveur sait quel cv supprimer */}
                                        <button 
                                            type="submit" 
                                            className="text-xs text-red-300 hover:text-red-100 bg-red-900/50 hover:bg-red-900 px-3 py-1 rounded transition-colors"
                                        >
                                            Supprimer
                                        </button>
                                    </form>
                                </div>
                            </CvEntry>
                        ))
                    )}
                </section>
            </div>
        </div>
    );
}