-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  -- Auto-incrementing ID
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP DEFAULT NOW(),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);