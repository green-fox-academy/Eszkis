SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS users (
 id INT NOT NULL AUTO_INCREMENT,
 userName varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;