import { query } from '$lib/utils'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const page = event.url.searchParams.get("page") || 0
    const result = await query(selectCommunityQuery, [page * 10])
    const posts = result.rows
    return { posts }
}

const selectCommunityQuery = `
    SELECT
        c.id AS id,
        c.title AS title,
        c.description AS description,
        TO_CHAR(c.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        community c
        JOIN users u ON c.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`