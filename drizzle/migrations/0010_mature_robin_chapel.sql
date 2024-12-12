ALTER TABLE "pengumuman" ADD COLUMN "pengumumanDate" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "pengumuman" DROP COLUMN IF EXISTS "date";