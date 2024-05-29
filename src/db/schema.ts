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
  thumb: text('thumb').notNull(),
});

export const photosRelations = relations(photos, ({ many }) => ({
  collectionsToPhotos: many(collectionsToPhotos),
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
  collectionsToPhotos: many(collectionsToPhotos),
}));

export const collectionsToPhotos = pgTable(
  'collections_to_photos',
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

export const collectionsToPhotosRelations = relations(
  collectionsToPhotos,
  ({ one }) => ({
    photo: one(photos, {
      fields: [collectionsToPhotos.photoId],
      references: [photos.id],
    }),
    collection: one(collections, {
      fields: [collectionsToPhotos.collectionId],
      references: [collections.id],
    }),
  })
);

export type InsertPhoto = typeof photos.$inferInsert;
export type SelectPhoto = typeof photos.$inferSelect;

export type InsertCollection = typeof collections.$inferInsert;
export type SelectCollection = typeof collections.$inferSelect;
