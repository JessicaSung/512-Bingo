CREATE DATABASE bingo_db;

USE bingo_db;


CREATE TABLE gamecard (
	id INT NOT NULL AUTO_INCREMENT,
	card_name VARCHAR(15),
	item VARCHAR(21),
	category VARCHAR(15),
	PRIMARY KEY (id)
);

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(20),
	password VARCHAR(255),
	active_card INT,
	items_found VARCHAR(25),
	badge_level INT NOT NULL,
	PRIMARY KEY (id)
);