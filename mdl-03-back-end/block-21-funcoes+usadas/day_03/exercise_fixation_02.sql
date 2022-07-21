CREATE SCHEMA IF NOT EXISTS Normalization;
USE Normalization;

CREATE TABLE Funcionario(
	funcionario_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	sobrenome VARCHAR(100) NOT NULL,
	ddd INT NOT NULL,
	celular INT NOT NULL,
	email varchar(50) NOT NULL,
	data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Funcionario (funcionario_id, nome, sobrenome, ddd, celular, email)
VALUES (12, 'Joseph', 'Rodrigues', 35, 985521445, 'jo@gmail.com'),
		  (13, 'André', 'Freeman', 47, 995224996,'andre1990@gmail.com'),
			(14, 'Cíntia', 'Duval', 33, 998554669, 'cindy@outlook.com'),
			(15, 'Fernanda', 'Mendes', 33, 992001556, 'fernandamendes@yahoo.com');

CREATE TABLE Setor(
	setor_id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100)
);

INSERT INTO Setor (nome)
VALUES ('Administração'),
			('Vendas'),
			('Operacional'),
			('Estratégico'),
			('Marketing');

CREATE TABLE Funcionario_setor(
	funcionario_setor_id INT AUTO_INCREMENT PRIMARY KEY,
	funcionario_id INT NOT NULL,
	setor_id INT NOT NULL,
	FOREIGN KEY (funcionario_id) references Funcionario(funcionario_id),
	FOREIGN KEY (setor_id) references Setor(setor_id)
);

INSERT INTO Funcionario_setor (funcionario_id, setor_id)
	VALUES (12,1),
 			  (12,2),
			  (13,3),
				(14,4),
				(14,2),
				(15,5);