const express = require('express');
const router = express.Router();

// Armazenamento em memória
let tarefas = [];
let nextId = 1;

// POST /tarefas (criar)
router.post('/tarefas', (req, res) => {
  const { descricao, status } = req.body;
  if (!descricao || !descricao.trim()) {
    return res.status(400).json({ message: 'Descrição é obrigatória.' });
  }
  const nova = {
    id: nextId++,
    descricao: descricao.trim(),
    status: status === 'completa' ? 'completa' : 'pendente'
  };
  tarefas.push(nova);
  return res.status(201).json(nova);
});

// GET /tarefas (listar)
router.get('/tarefas', (_req, res) => {
  return res.status(200).json(tarefas);
});

// PUT /tarefas/:id (atualizar)
router.put('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const { descricao, status } = req.body;
  const idx = tarefas.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  if (!descricao || !descricao.trim()) {
    return res.status(400).json({ message: 'Descrição é obrigatória.' });
    }
  tarefas[idx] = {
    id,
    descricao: descricao.trim(),
    status: status === 'completa' ? 'completa' : 'pendente'
  };
  return res.status(200).json(tarefas[idx]);
});

// DELETE /tarefas/:id (remover)
router.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = tarefas.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Tarefa não encontrada.' });
  tarefas.splice(idx, 1);
  return res.status(200).json({ message: 'Tarefa deletada com sucesso.' });
});

module.exports = router;