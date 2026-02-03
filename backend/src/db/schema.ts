import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const ingredientsTable = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
  category: varchar({ length: 255 }).notNull(),
  amount: integer().notNull(),
  unit: varchar({ length: 20 }).notNull(),
});