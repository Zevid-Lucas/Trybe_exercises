-- Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25'; 