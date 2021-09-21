(SELECT first_name FROM actor 
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT first_name FROM staff
LIMIT 1)
UNION
(SELECT first_name FROM customer LIMIT 5 OFFSET 15)
ORDER BY first_name;
