SELECT title, rating
FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
ORDER BY rating DESC;
