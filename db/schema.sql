CREATE DATABASE bee_db;
USE bee_db;

CREATE TABLE bees
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar
    (255) NOT NULL,
	landed BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);
