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

export const insertBoard = `
    INSERT INTO 
        board (users_id, title, description)
    VALUES
        ($1, $2, $3)
    RETURNING id;
`

export const insertDaily = `
    INSERT INTO 
        daily (users_id, title, description, file)
    VALUES
        ($1, $2, $3, $4)
    RETURNING id;
`

export const insertDevelop = `
    INSERT INTO 
        develop (users_id, title, description, file)
    VALUES
        ($1, $2, $3, $4)
    RETURNING id;
`

export const selectDailyDetail = `
    SELECT
        d.id AS id,
        d.title AS title,
        d.description AS description,
        d.file AS file,
        TO_CHAR(d.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        daily d
        JOIN users u ON d.users_id = u.id
    WHERE d.id = $1;
`

export const selectDevelopDetail = `
    SELECT
        de.id AS id,
        de.title AS title,
        de.description AS description,
        de.file AS file,
        TO_CHAR(de.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        develop de
        JOIN users u ON de.users_id = u.id
    WHERE de.id = $1;
`

export const selectDaily = `
    SELECT
        d.id AS id,
        d.title AS title,
        d.description AS description,
        TO_CHAR(d.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        daily d
        JOIN users u ON d.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`

export const selectDevelop = `
    SELECT
        de.id AS id,
        de.title AS title,
        de.description AS description,
        TO_CHAR(de.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        develop de
        JOIN users u ON de.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`

export const selectBoard = `
    SELECT
        b.id AS id,
        b.title AS title,
        b.description AS description,
        TO_CHAR(b.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        board b
        JOIN users u ON b.users_id = u.id
    ORDER BY
        id DESC
    LIMIT
        10
    OFFSET
        $1;
`

export const selectBoardDetail = `
    SELECT
        b.id AS id,
        b.title AS title,
        b.description AS description,
        TO_CHAR(b.created_at, 'YYYY-MM-DD') AS created_at,
        u.nickname AS nickname
    FROM
        board b
        JOIN users u ON b.users_id = u.id
    WHERE b.id = $1;
`