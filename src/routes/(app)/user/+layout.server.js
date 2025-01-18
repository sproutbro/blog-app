import { redirect } from '@sveltejs/kit';
import { ADMIN } from "$env/static/private";

/** @type {import('./$types').LayoutServerLoad} */
export function load(event) {
    const encryptedUserID = event.cookies.get("user")
    if (!encryptedUserID) return redirect(302, "/auth/login")
}