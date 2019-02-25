CREATE DATABASE drifters_db;

USE drifters_db;

CREATE TABLE drifters (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    face_photo_link VARCHAR(255) NOT NULL,
    car_name VARCHAR(100) NOT NULL,
    car_photo_link VARCHAR(255) NOT NULL, 
    race_status BOOLEAN DEFAULT false NOT NULL,
    race_comment VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);
