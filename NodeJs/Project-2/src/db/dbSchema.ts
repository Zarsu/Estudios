import { pgTable,uuid,varchar,text,boolean,integer,timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-valibot'; // Se necesita actualizar a 'drizzle-orm/valibot' cuando esté disponible
import { relations } from "drizzle-orm";


// Tables Schemas

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),

  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),

  firstName: varchar("first_name", { length: 50 }),
  lastName: varchar("last_name", { length: 50 }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const habits = pgTable("habits", {
  id: uuid("id").primaryKey().defaultRandom(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),

  frequency: varchar("frequency", { length: 20 }).notNull(),
  targetCount: integer("target_count").default(1),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const entries = pgTable("entries", {
  id: uuid("id").primaryKey().defaultRandom(),

  habitId: uuid("habit_id")
    .notNull()
    .references(() => habits.id, {
      onDelete: "cascade",
    })
    .notNull(),

  completionDate: timestamp("completion_date").defaultNow().notNull(),
  note: text("note"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tags = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),

  name: varchar("name", { length: 50 }).notNull().unique(),
  color: varchar("color", { length: 7 }).default("#6b7280"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const habitsTags = pgTable("habits_tags", {
  id: uuid("id").primaryKey().defaultRandom(),

  habitId: uuid("habit_id")
    .notNull()
    .references(() => habits.id, {
      onDelete: "cascade",
    }),

  tagId: uuid("tag_id")
    .notNull()
    .references(() => tags.id, {
      onDelete: "cascade",
    }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});


// Relations

export const usersRelations = relations(users, ({ many }) => ({
  habits: many(habits),
}));

export const habitsRelations = relations(habits, ({ one, many }) => ({
  user: one(users, {
    fields: [habits.userId],
    references: [users.id],
  }),
  entries: many(entries),
  tags: many(habitsTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  habitsTags: many(habitsTags),
}));

export const habitsTagsRelations = relations(habitsTags, ({ one }) => ({
  tag: one(tags, {
    fields: [habitsTags.tagId],
    references: [tags.id],
  }),
  habit: one(habits, {
    fields: [habitsTags.habitId],
    references: [habits.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type Habit = typeof habits.$inferSelect;
export type Entry = typeof entries.$inferSelect;
export type Tag = typeof tags.$inferSelect;
export type HabitTag = typeof habitsTags.$inferSelect;

export const selectUserSchema = createSelectSchema(users);
export const insertUserSchema = createInsertSchema(users);
export const updateUserSchema = createUpdateSchema(users);