-- Add this table to the database in order to store necessary information for the form

DROP TABLE IF EXISTS `form`;

CREATE TABLE form (
    name VARCHAR(64),
    age INTEGER,
    title VARCHAR(64),
    hometown VARCHAR(128)
);