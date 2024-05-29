CREATE TABLE IF NOT EXISTS "collections_to_photos" (
	"photo_id" uuid NOT NULL,
	"collection_id" uuid NOT NULL,
	CONSTRAINT "collections_to_photos_photo_id_collection_id_pk" PRIMARY KEY("photo_id","collection_id")
);
--> statement-breakpoint
DROP TABLE "photos_to_collections";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collections_to_photos" ADD CONSTRAINT "collections_to_photos_photo_id_photo_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."photo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collections_to_photos" ADD CONSTRAINT "collections_to_photos_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
