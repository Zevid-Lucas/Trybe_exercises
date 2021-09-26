SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;