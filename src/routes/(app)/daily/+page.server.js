import { query } from '$lib/utils'
import { selectDaily } from '$lib/sql';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const page = event.url.searchParams.get("page") || 0
    const result = await query(selectDaily, [page * 10])
    const posts = result.rows
    return { posts }
}