SELECT rating
FROM BoxOffice
WHERE movie_id IN (
  SELECT id
  FROM Movies 
  WHERE year > 2009
);

SELECT rating
FROM BoxOffice
INNER JOIN Movies
ON movie_id = id
WHERE year > 2009;