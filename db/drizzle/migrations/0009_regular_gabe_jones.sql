-- ALTER TABLE "pengumuman" RENAME COLUMN "tanggal" TO "date";

ALTER TABLE "pengumuman" ALTER COLUMN "tanggal" TYPE date USING tanggal::date;