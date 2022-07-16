-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id 2.
-- Porém, não inclua o cliente KENNETH no resultado.


SELECT first_name FROM customer
WHERE first_name <> 'KENNETH' AND store_id = 2 AND active = 0
ORDER BY first_name;