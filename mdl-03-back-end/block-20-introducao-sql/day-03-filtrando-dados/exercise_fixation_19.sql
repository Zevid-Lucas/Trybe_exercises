-- Quantos pagamentos temos com a data de retorno 2005-05-25?

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25'; 