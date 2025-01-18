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
        diary (users_id, title, description, file)
    VALUES
        ($1, $2, $3, $4)
    RETURNING id;
`

export const selectDailyDetail = `
    SELECT
        d.id AS id,
        d.title AS title,
        d.description AS description,
        TO_CHAR(d.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        diary d
        JOIN users u ON d.users_id = u.id
    WHERE d.id = $1;
`


export const selectDaily = `
    SELECT
        d.id AS id,
        d.title AS title,
        d.description AS description,
        TO_CHAR(d.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        diary d
        JOIN users u ON d.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`