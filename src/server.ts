import express from 'express'
import helmet from 'helmet'
import router from './router/index'

const app = express()
const PORT = 3000

app.use(helmet())
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})