'use server';

import { db } from '@/db';
import { cvTable } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { desc, eq } from 'drizzle-orm';

// Récupérer les expériences (de la plus récente à la plus ancienne si on avait une date, ici par défaut)
export async function getCvEntries() {
  return await db.select().from(cvTable).orderBy(desc(cvTable.id));
}

// Action serveur pour le formulaire
export async function addCvEntryAction(formData: FormData) {
  const title = formData.get('title') as string;
  const employer = formData.get('employer') as string;
  const description = formData.get('description') as string;

  if (!title || !employer) return;

  await db.insert(cvTable).values({
    title,
    employer,
    description,
  });

  // Rafraîchit la page pour afficher la nouvelle entrée immédiatement
  revalidatePath('/cv');
}

export async function removeCvEntry(id: string) {
  // Suppression dans la DB
  await db.delete(cvTable).where(eq(cvTable.id, id));
  // On rafraîchit la page pour voir le changement immédiatement
  revalidatePath('/cv');
}

export async function removeCvEntryAction(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  await removeCvEntry(id);
}