import { type InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  inputClassName?: string
}

export function Field(props: InputProps) {
  const { className, label, inputClassName, ...inputProps } = props
  return (
    <label className={className}>
      {label}
      <input
        className={inputClassName}
        {...inputProps}
      />
    </label>
  )
}