CREATE SCHEMA IF NOT EXISTS Acervo_Albuns;
USE Acervo_Albuns;

CREATE TABLE artista(
	artista_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE estilo_musical(
	estilo_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(30) NOT NULL
);

CREATE TABLE album(
	album_id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	preco DECIMAL(4,2) NOT NULL,
	artista_id INT NOT NULL,
	estilo_id INT NOT NULL,
	FOREIGN KEY (artista_id) REFERENCES artista (artista_id),
	FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id)
);

CREATE TABLE cancao(
	cancao_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	album_id INT NOT NULL,
	FOREIGN KEY (album_id) REFERENCES album (album_id)
);