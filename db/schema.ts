import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const blogTable = pgTable('blog', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  done: boolean('done').default(false).notNull(),
});

export const cvTable = pgTable('cv_entries', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  employer: text('employer').notNull(),
  description: text('description').notNull(),
});