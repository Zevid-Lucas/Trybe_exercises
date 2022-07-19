-- O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com o maior custo de substituição,
-- valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. 
-- Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title 
LIMIT 100;