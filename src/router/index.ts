import express from 'express'
import getItems from './getItens'
import createItem from './createItens'
import updateItem from './updateItens'
import deleteItem from './deleteItens'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    mensagem: "Bem-vindo à API de Itens",
    instrucoes: {
      "GET /items": "Recuperar todos os itens",
      "POST /items?name=NomeDoItem": "Criar um novo item",
      "PUT /items?id=IdDoProduto": "Atualizar um item pelo ID",
      "DELETE /items?id=IdDoProduto": "Deletar um item pelo ID"
    }
  });
});

router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;
