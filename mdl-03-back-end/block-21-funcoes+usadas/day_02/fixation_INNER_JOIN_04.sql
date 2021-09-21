SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM address AS A
INNER JOIN customer AS C
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%RENE%';


