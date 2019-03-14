SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
 userName varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 password varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 firstName varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 secondName varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


INSERT INTO users (userName, password, firstName, secondName) VALUES 
('user1', 'password1', 'Jancsi1', 'Nagy1'),
('user2', 'password2', 'Jancsi2', 'Nagy2'),
('user3', 'password3', 'Jancsi3', 'Nagy3'),
('user4', 'password4', 'Jancsi4', 'Nagy4'),
('user5', 'password5', 'Jancsi5', 'Nagy5');