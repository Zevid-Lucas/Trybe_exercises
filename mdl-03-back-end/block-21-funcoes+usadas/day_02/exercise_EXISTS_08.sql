SELECT name, location 
FROM Theater AS t
WHERE EXISTS (
	SELECT theater_id FROM Movies
    WHERE t.id = Movies.theater_id
);