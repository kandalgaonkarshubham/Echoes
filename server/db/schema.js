const { pgTable, serial, varchar, text, timestamp, integer } = require('drizzle-orm/pg-core');

export const userTable = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 200 }).notNull(),
});

export const journalTable = pgTable('journals', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .references(() => userTable.id)
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
