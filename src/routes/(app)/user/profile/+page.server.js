import { selectUser } from '$lib/sql'
import { query, decrypt } from '$lib/utils'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const encryptedUserID = event.cookies.get("user")
    if (!encryptedUserID) return redirect(302, "/auth/login")

    const userID = decrypt(encryptedUserID)
    const result = await query(selectUser, [userID])

    return result.rows[0]
}