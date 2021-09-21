SELECT S.first_name, S.last_name, A.address
FROM staff AS S
INNER JOIN address AS A
ON S.address_id = A.address_id;

