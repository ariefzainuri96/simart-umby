CREATE TABLE IF NOT EXISTS "pengumuman" (
	"id" serial PRIMARY KEY NOT NULL,
	"tanggal" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"deskripsi" varchar(255) NOT NULL,
	"lampiran" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"nis" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "nisIndex" ON "user" USING btree ("nis");