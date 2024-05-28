import {
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const photos = pgTable('photo', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull(),
});

export const photosRelations = relations(photos, ({ many }) => ({
  photosToCollections: many(photosToCollections),
}));

export const collections = pgTable('collection', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
  userId: text('user_id').notNull(),
});

export const collectionsRelations = relations(collections, ({ many }) => ({
  photosToCollections: many(photosToCollections),
}));

export const photosToCollections = pgTable(
  'photos_to_collections',
  {
    photoId: uuid('photo_id')
      .notNull()
      .references(() => photos.id),
    collectionId: uuid('collection_id')
      .notNull()
      .references(() => collections.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.photoId, t.collectionId] }),
  })
);

export const photosToCollectionsRelations = relations(
  photosToCollections,
  ({ one }) => ({
    photo: one(photos, {
      fields: [photosToCollections.photoId],
      references: [photos.id],
    }),
    collection: one(collections, {
      fields: [photosToCollections.collectionId],
      references: [collections.id],
    }),
  })
);

export type InsertPhoto = typeof photos.$inferInsert;
export type SelectPhoto = typeof photos.$inferSelect;

export type InsertCollection = typeof collections.$inferInsert;
export type SelectCollection = typeof collections.$inferSelect;
