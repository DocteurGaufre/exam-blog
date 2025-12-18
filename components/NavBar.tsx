import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

function NavLink({ href, children, className }: NavLinkProps) {
    return (
        <li className={className}>
            <Link 
                href={href} 
                className="block py-2 px-4 hover:bg-[#609be2]"
            >
                {children}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="bg-[#4d7cb5] text-slate-50 shadow-xl sticky top-0 z-50">
            <ul className="container mx-auto flex items-center">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/bookings">Réservations</NavLink>
            </ul>
        </nav>
    );
}