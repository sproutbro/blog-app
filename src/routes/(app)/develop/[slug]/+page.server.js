import { selectDevelopDetail } from '$lib/sql'
import { query } from '$lib/utils'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const developID = event.params.slug
    const result = await query(selectDevelopDetail, [developID])
    return { post: result.rows[0] }
}