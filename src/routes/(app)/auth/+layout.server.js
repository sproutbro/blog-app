import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export function load(event) {
    if (event.cookies.get("user")) {
        return redirect(302, "/");
    }
}