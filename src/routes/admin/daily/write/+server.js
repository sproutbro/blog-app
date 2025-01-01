import { insertDaily, selectUser } from '$lib/sql';
import { decrypt, query } from '$lib/utils';
import { json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    const encryptedUserID = event.cookies.get("user")
    if (!encryptedUserID) return redirect(302, "/auth/login")
    const userID = decrypt(encryptedUserID)

    // const formData = await event.request.json();
    // const values = Object.values(formData);

    const contentType = event.request.headers.get("content-type");
    const boundary = contentType.split("boundary=")[1];
    console.log(contentType)

    // const result = await query(insertDaily, [userID, ...values]);

    // return json(result.rows[0])
}