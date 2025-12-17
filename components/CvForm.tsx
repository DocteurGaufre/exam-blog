'use client';

import { useRef } from 'react';
import { addCvEntryAction } from '@/lib/cv';
import { Field } from './Field';
import { Button } from './Button';

export default function CvForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addCvEntryAction(formData);
        formRef.current?.reset();
      }}
      className="flex flex-col gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200"
    >
      <h3 className="font-bold text-lg text-slate-700">Ajouter une expérience</h3>

      <Field 
        label="Titre du poste" 
        name="title" 
        placeholder="Ex: Développeur React" 
        required 
        className="flex flex-col gap-1 font-medium text-slate-700"
        inputClassName="border p-2 rounded"
      />

      <Field 
        label="Employeur" 
        name="employer" 
        placeholder="Ex: Google" 
        required 
        className="flex flex-col gap-1 font-medium text-slate-700"
        inputClassName="border p-2 rounded"
      />

      <Field 
        tag="textarea"
        label="Description"
        name="description" 
        required 
        placeholder="Détails de la mission..." 
        // On peut passer des props spécifiques au textarea comme rows
        rows={3} 
        className="flex flex-col gap-1 font-medium text-slate-700"
        inputClassName="border p-2 rounded h-24"
      />

      <Button type="submit">Ajouter</Button>
    </form>
  );
}