USE sakila;
DELIMITER $$

CREATE PROCEDURE Top10Actors()
BEGIN
	SELECT actor_id, COUNT(*) AS 'Total de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL Top10Actors();