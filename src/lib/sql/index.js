export const selectUser = `
    SELECT
        *
    FROM
        users
    WHERE
        id = $1;
`

export const insertUser = `
    INSERT INTO
        users
    VALUES
        ($1, $2);
`

export const updateUser = `
    UPDATE 
        users
    SET 
        nickname = $1
    WHERE id= $2;
`

export const insertDaily = `
    INSERT INTO
        community (users_id, title, description)
    VALUES
        ($1, $2, $3)
    RETURNING id;
`

export const selectDailyDetail = `
SELECT
    c.id AS id,
    c.title AS title,
    c.description AS description,
    TO_CHAR(c.created_at, 'YYYY-MM-DD') AS created_at,
    u.nickname AS nickname
FROM
    community c
    JOIN users u ON c.users_id = u.id
WHERE c.id = $1;
`