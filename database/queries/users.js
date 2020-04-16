export default {
    insert: 'INSERT INTO users (first_name, last_name) VALUES ($1, $2);',
    selectFromFirstName: 'SELECT * FROM users WHERE first_name LIKE $1;',
    selectFromID: 'SELECT * FROM users WHERE id = $1;',
    selectAll: 'SELECT * FROM users;'
}