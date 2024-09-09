SELECT c.id AS codigo, c.razao_social, t.numero AS telefone
FROM clientes c
JOIN estados e ON c.estado_id = e.id
JOIN telefones t ON c.id = t.cliente_id
WHERE e.codigo = 'SP'
