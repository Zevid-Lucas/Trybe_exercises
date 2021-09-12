SET SQL_SAFE_UPDATES = 0;

INSERT INTO BoxOffice(rating, domestic_sales, international_sales)
VALUES (6.8, 450000000, 370000000);

UPDATE BoxOffice
SET movie_id = 8
WHERE rating = 6.8;