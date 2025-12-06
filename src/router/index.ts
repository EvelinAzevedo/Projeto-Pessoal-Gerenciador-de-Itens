import express from 'express'
import getItems from './getItens'
import createItem from './createItens'
import updateItem from './updateItens'
import deleteItem from './deleteItens'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    mensagem: "Bem-vindo à API de Itens",
    instrucoes: {
      "GET /items": "Recuperar todos os itens",
      "GET /items/create?name=NomeDoItem": "Criar um novo item via GET",
      "PUT /items?id=IdDoProduto&name=NovoNome": "Atualizar um item pelo ID",
      "DELETE /items?id=IdDoProduto": "Deletar um item pelo ID"
    }
  })
})

// CRUD
router.get('/items', getItems)
router.get('/items/create', createItem)
router.put('/items', updateItem)
router.delete('/items', deleteItem)

export default router
