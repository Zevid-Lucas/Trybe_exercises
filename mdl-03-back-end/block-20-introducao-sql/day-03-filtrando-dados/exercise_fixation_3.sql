SELECT title, description, release_year, replacement_cost FROM film
WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title 
LIMIT 100;