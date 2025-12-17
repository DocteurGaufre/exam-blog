import CvEntry from "@/components/CvEntry"

export default function Cv() {
    return (
        <>
            <h1 className="text-center text-3xl my-8 font-bold">Curriculum Vitae</h1>

            <div className="lg:flex">
                <section className="border border-slate-200 rounded-2xl p-4 m-4">
                    <h2 className="font-bold">A propos de moi</h2>
                    <p>Voici mon CV avec mes expériences incroyables</p>
                </section>

                <section className="lg:grow">
                    <h2 className="text-3xl my-4">EXPERIENCES</h2>

                    <CvEntry title="Enseignement en physique quantique" employer="ECAM">
                        <ul>
                            <li>Donne cours de physique quantique en master</li>
                        </ul>
                    </CvEntry>
                </section>
            </div>
        </>
    )
}