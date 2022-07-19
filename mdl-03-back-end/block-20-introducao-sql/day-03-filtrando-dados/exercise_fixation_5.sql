-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.

SELECT * FROM sakila.customer
WHERE store_id = 1 AND active = 0;