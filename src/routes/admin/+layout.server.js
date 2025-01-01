import { redirect } from '@sveltejs/kit';
import { ADMIN } from "$env/static/private";

/** @type {import('./$types').LayoutServerLoad} */
export function load(event) {
    if (event.cookies.get("user") !== ADMIN) {
        return redirect(302, "/");
    }
}