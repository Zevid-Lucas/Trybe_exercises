(SELECT first_name, last_name FROM customer)
UNION
(SELECT first_name, last_name FROM actor)
ORDER BY first_name
LIMIT 15 OFFSET 45;
