ALTER TABLE "pengumuman" ADD COLUMN "authorId" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pengumuman" ADD CONSTRAINT "pengumuman_authorId_user_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
