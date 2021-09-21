SELECT C.first_name, COUNT(A.address)
FROM customer AS C
INNER JOIN address as A
ON C.address_id = A.address_id
WHERE active IS TRUE
GROUP BY C.first_name
ORDER BY C.first_name DESC;
