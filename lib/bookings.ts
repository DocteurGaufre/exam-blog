'use server'

import { db } from '@/db'
import { eq } from 'drizzle-orm'
import { bookingTable } from '@/db/schema'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getBookings() {
  return await db.select().from(bookingTable)
}

export async function getBooking(id: string) {
  const result = await db.select().from(bookingTable).where(eq(bookingTable.id, id));
  return result[0]; // Retourne le premier élément trouvé
}

export async function addBooking(form: FormData) {
  await db.insert(bookingTable).values({
    name: String(form.get('name')),
    phone: String(form.get('phone')),
    people_number: String(form.get('people_number')),
    date: String(form.get('date')),
    hour: String(form.get('hour')),
    done: false,
  })
  redirect('/bookings')
}

export async function editBooking(form: FormData) {
  await db
    .update(bookingTable)
    .set({
      name: String(form.get('name')),
      phone: String(form.get('phone')),
      people_number: String(form.get('people_number')),
      date: String(form.get('date')),
      hour: String(form.get('hour')),
      done: form.get('done') === 'on',
    })
    .where(eq(bookingTable.id, String(form.get('id'))))
  
  redirect('/bookings')
}

export async function removeBooking(id: string) {
  await db.delete(bookingTable).where(eq(bookingTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeBookingAction(formData: FormData) {
  const id = formData.get("id") as string
  return removeBooking(id)
}