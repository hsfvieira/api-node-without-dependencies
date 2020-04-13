DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL,
    first_name VARCHAR,
    last_name VARCHAR,
    PRIMARY KEY(id)
);