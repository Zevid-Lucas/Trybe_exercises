-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .

SELECT code, name FROM Scientists.Projects
WHERE name NOT LIKE 'a%';