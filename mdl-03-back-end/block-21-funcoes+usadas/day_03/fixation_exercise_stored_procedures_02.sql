Use sakila;
DELIMITER $$

CREATE PROCEDURE ShowCategorySelected(IN Category VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name 
    FROM film AS f
    INNER JOIN film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN category AS c ON c.category_id = fc.category_id
    WHERE c.name = Category;
END $$

DELIMITER ;

CALL ShowCategorySelected('Comedy');