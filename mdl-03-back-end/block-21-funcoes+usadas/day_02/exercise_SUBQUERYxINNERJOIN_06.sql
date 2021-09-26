SELECT title
FROM Movies 
WHERE id IN (
  SELECT movie_id 
  FROM BoxOffice
  WHERE rating > 7.5
);

SELECT title
FROM Movies
INNER JOIN BoxOffice
ON id = movie_id
WHERE rating > 7.5;