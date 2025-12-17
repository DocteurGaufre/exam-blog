import { type ButtonHTMLAttributes } from 'react';

// On étend les attributs HTML standard d'un bouton
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
    return (
        <button
            // On définit des styles de base + on laisse la possibilité de surcharger via className
            className={`w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 ${className}`}
            {...props}
        >
            {props.children}
        </button>
    );
}