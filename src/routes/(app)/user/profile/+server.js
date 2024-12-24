import { updateUser } from '$lib/sql';
import { query, decrypt } from '$lib/utils';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    // get UserID
    const encryptedUserID = event.cookies.get("user")
    if (!encryptedUserID) return redirect(302, "/auth/login")
    const userID = decrypt(encryptedUserID)

    // get form data
    const userData = await event.request.json();
    const values = Object.values(userData);

    const result = await query(updateUser, [...values, userID])
    if (result.rowCount) return json({ message: "Success" })
}