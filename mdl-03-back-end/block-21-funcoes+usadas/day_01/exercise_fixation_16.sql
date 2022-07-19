-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), 
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente. Solução:

SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115 AND 121.50
ORDER BY media DESC;