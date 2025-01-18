import { query } from '$lib/utils'
import { selectBoard } from '$lib/sql';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const page = event.url.searchParams.get("page") || 0
    const result = await query(selectBoard, [page * 10])
    const posts = result.rows
    return { posts }
}