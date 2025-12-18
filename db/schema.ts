import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const bookingTable = pgTable('bookings', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  people_number: text('people_number').notNull(),
  date : text('date').notNull(),
  hour: text('hour').notNull(),
  done: boolean('done').default(false).notNull(),
});