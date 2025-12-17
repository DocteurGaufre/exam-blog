import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

// 1. Props communes aux deux versions (titre, styles, etc.)
type BaseProps = {
  label: string
  inputClassName?: string
}

// 2. Définition pour l'INPUT (cas par défaut)
// On autorise tag="input" ou undefined
type InputFieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & {
  tag?: 'input'
}

// 3. Définition pour le TEXTAREA
// On oblige tag="textarea" pour activer ce mode
type TextareaFieldProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & {
  tag: 'textarea'
}

// 4. On combine les deux types
type FieldProps = InputFieldProps | TextareaFieldProps

export function Field(props: FieldProps) {
  // On récupère 'tag' avec 'input' comme valeur par défaut
  const { className, label, inputClassName, tag = 'input', ...rest } = props

  // CAS TEXTAREA
  if (tag === 'textarea') {
    return (
      <label className={className}>
        {label}
        {/* On "cast" rest pour rassurer TypeScript que ce sont bien les props du textarea */}
        <textarea
          className={inputClassName}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </label>
    )
  }

  // CAS INPUT (Défaut)
  return (
    <label className={className}>
      {label}
      <input
        className={inputClassName}
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      />
    </label>
  )
}