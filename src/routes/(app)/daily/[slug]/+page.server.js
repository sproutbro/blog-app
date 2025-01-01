import { selectDailyDetail } from '$lib/sql'
import { query } from '$lib/utils'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const dailyID = event.params.slug
    const result = await query(selectDailyDetail, [dailyID])
    return { post: result.rows[0] }
}