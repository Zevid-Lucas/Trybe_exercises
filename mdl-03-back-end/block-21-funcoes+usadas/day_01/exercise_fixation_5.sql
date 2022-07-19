-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT IF(220 MOD 12 = 0, 'Não', CONCAT('SIM. ', 220 MOD 12, ' pessoas sobrando'))