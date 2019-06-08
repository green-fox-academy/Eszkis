SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS users (
 id INT NOT NULL AUTO_INCREMENT,
 userName varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 password varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 email varchar(40) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 cupon varchar(10) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 balance INT(6) COLLATE latin1_general_ci NOT NULL DEFAULT 0,
 PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;