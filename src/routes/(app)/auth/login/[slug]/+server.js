import { redirect } from "@sveltejs/kit";
import { createAuthorizationUrl } from "$lib/auth";

/** @type {import('./$types').RequestHandler} */
export function GET(event) {
    const url = createAuthorizationUrl(event)
    return redirect(302, url)
}