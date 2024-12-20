ALTER TABLE "user" RENAME COLUMN "email" TO "nis";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_nis_unique" UNIQUE("nis");