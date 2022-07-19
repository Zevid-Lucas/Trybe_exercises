-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.

SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;