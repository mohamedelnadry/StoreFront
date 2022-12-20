/* Replace with your SQL commands */

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    First_Name VARCHAR(50) NOT NULL, 
    Last_Name VARCHAR(50)NOT NULL,
    email VARCHAR(50) UNIQUE,
    Password varchar(255) NOT NULL
);

