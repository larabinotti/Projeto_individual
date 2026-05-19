CREATE DATABASE entreagoraedepois;
USE entreagoraedepois;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    papel VARCHAR(45) NOT NULL DEFAULT 'usuario',
    criado_em DATETIME 
);

CREATE TABLE humor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nota TINYINT NOT NULL,
    emoji VARCHAR(45) NOT NULL,
    fk_usuario INT NOT NULL UNIQUE,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE artigo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL,
    conteudo TEXT NOT NULL,
    publicado_em DATE
);

CREATE TABLE favorito (
    id INT PRIMARY KEY AUTO_INCREMENT,
    favoritado_em DATETIME,
    fk_usuario INT NOT NULL,
    fk_artigo INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_artigo) REFERENCES artigo(id)
);

CREATE TABLE entrada_calculadora (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conteudo TEXT NOT NULL,
    classificacao VARCHAR(45) NOT NULL,
    criado_em DATETIME,
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE entrada_diario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conteudo TEXT NOT NULL,
    classificacao VARCHAR(45) NOT NULL,
    criado_em DATETIME,
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

