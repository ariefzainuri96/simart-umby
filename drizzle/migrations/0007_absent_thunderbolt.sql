-- ALTER TABLE "pengumuman" ALTER COLUMN "tanggal" SET DATA TYPE date;--> statement-breakpoint
-- ALTER TABLE "pengumuman" ALTER COLUMN "tanggal" SET DEFAULT now();

UPDATE "pengumuman" SET "tanggal" = '2000-01-01 00:00:00' WHERE "tanggal" = '';

ALTER TABLE "pengumuman" ALTER COLUMN "tanggal" TYPE timestamp USING tanggal::timestamp;