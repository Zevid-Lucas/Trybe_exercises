-- Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.

SELECT * FROM film
WHERE title LIKE '%lord' AND description LIKE '%girl%';