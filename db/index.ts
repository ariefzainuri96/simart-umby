import { db } from "./db";
import { and, eq } from "drizzle-orm";
import { PengumumanTable } from "./schema/pengumuman-table";

async function main() {
    // for inserting use values
    // for updating use set

    // const data = await db.query.PengumumanTable.findMany({
    //     with: {
    //         author: true,
    //     },
    //     // where: (fields, operators) => {
    //     //     return operators.eq(fields.authorId, 1);
    //     // },
    //     where: and(
    //         eq(PengumumanTable.authorId, 1),
    //         eq(PengumumanTable.judul, "Pengumuman Baru 3"),
    //     ),
    // });

    const data = await db.insert(PengumumanTable).values({
        judul: "Pengumuman Baru 5",
        pengumuman: "Deskripsi Pengumuman Baru 5",
        lampiran: "Lampiran Pengumuman Baru 5",
        tanggal: "2023-07-01",
        authorId: 1,
    });

    // const date = new Date();

    // const data = await db
    //     .insert(PengumumanTable)
    //     .values({
    //         judul: "Pengumuman Baru 4",
    //         pengumuman: "Deskripsi Pengumuman Baru 4",
    //         lampiran: "Lampiran Pengumuman Baru 4",
    //         tanggal: format(date, "yyyy-MM-dd"),
    //         authorId: 1,
    //     })
    //     .returning({
    //         id: PengumumanTable.id,
    //         judul: PengumumanTable.judul,
    //     });

    // const data = await db
    //     .update(UserTable)
    //     .set({
    //         nis: "sm-2",
    //     })
    //     .where(eq(UserTable.nis, "sm-1"))
    //     .returning({
    //         id: UserTable.id,
    //     });

    // data.forEach((element) => {
    //     console.log(element);
    // });
}

main();
