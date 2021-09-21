SELECT A.actor_id, A.first_name, FA.film_id, F.title 
FROM actor AS A
INNER JOIN film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN film AS F
ON F.film_id = FA.film_id;

