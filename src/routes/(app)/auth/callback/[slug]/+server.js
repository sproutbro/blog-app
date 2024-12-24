import { redirect } from "@sveltejs/kit";
import { handleCallback } from "$lib/auth";
import { query } from "$lib/utils";
import { selectUser, insertUser } from "$lib/sql";


/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
    const { userId, nickname } = await handleCallback(event)

    // check new user
    const result = await query(selectUser, [userId])
    if (!result.rows[0]) await query(insertUser, [userId, nickname])
    return redirect(302, "/");
}

