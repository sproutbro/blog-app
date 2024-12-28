import { selectCommunityDetail } from '$lib/db/community'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const post = await selectCommunityDetail(event)
    return { post }
}