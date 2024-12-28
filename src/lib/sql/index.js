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