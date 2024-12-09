"use server";

export async function tambahPengumumanBaru(prevState: any, data: FormData) {
    try {
        console.log("Data: ", data);

        return { status: 200 };
    } catch (error) {
        console.log("Error happen: ", error);

        return { status: 400 };
    }
}
