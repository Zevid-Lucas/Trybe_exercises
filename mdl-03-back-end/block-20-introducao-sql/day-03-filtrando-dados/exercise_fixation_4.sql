-- Quantos clientes estão ativos e na loja 1?

SELECT COUNT(*) FROM sakila.customer
WHERE active = 1 AND store_id = 1;