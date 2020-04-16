export default {
    insert: 'INSERT INTO users (first_name, last_name) VALUES ($1, $2);',
    selectFromFirstName: 'SELECT * FROM users WHERE first_name LIKE $1 LIMIT 10 OFFSET $2;',
    selectFromID: 'SELECT * FROM users WHERE id = $1;',
    selectAll: 'SELECT * FROM users LIMIT 10 OFFSET $1;',
    update: 'UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3',
    delete: 'DELETE FROM users WHERE id = $1;',
    countTotal: 'SELECT COUNT(id) FROM users;',
    countFromFirstName: 'SELECT COUNT(id) FROM users WHERE first_name LIKE $1;'
}