SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*) FROM employees
GROUP BY DEPARTMENT_ID
HAVING MAX(DEPARTMENT_ID) > 10;