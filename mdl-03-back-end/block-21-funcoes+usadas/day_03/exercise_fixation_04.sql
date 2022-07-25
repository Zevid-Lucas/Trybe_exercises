CREATE SCHEMA IF NOT EXISTS Zoologico;
USE Zoologico;

CREATE TABLE local(
	local_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE animal(
	animal_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	especie VARCHAR(50) NOT NULL,
	sexo VARCHAR(1) NOT NULL,
	idade INT NOT NULL,
	local_id INT NOT NULL,
	FOREIGN KEY (local_id) REFERENCES local (local_id)
);

CREATE TABLE gerente(
	gerente_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(30) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
	animal_cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
	animal_id INT NOT NULL,
	cuidador_id INT NOT NULL,
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);