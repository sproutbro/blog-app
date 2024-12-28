import { insertCommunity } from '$lib/db/community';
import { json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    return json(await insertCommunity(event))
}