DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
id INT NOT NULL AUTO_INCREMENT,
wish VARCHAR(140) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish)
VALUES ("to fly");

INSERT INTO wishes (wish)
VALUES ("Go to Disney World");

INSERT INTO wishes (wish)
VALUES ("More episodes of my favorite show");