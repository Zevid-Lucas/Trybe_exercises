SELECT name, location
FROM Theater AS t
WHERE NOT EXISTS (
  SELECT theater_id
  FROM Movies AS m
  WHERE t.id = m.theater_id
);
