import { ReactNode } from "react"

type CvEntry = {
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (
        <div className="p-4 border-2 bg-[#436d9e] border-[#609be2] rounded-2xl shadow mx my-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#e2a760]">{props.title}</h3>
                <h3 className="mb-2 italic">{props.employer}</h3>
            </div>
            {props.children}
        </div>
    )
}