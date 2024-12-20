ALTER TABLE "user" DROP CONSTRAINT "user_nis_unique";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "nisIndex" ON "user" USING btree ("nis");