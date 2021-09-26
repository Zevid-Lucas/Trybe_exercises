SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
RIGHT JOIN Movies m
ON m.theater_id = t.id 
ORDER BY t.name;
