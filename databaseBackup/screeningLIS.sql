-- Add this table to the database in order to store necessary information for the form

CREATE TABLE form (
    id INTEGER,
    name VARCHAR(64),
    title VARCHAR(64),
    hometown VARCHAR(128),
    PRIMARY KEY(id)
);