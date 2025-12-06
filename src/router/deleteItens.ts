import { Request, Response } from 'express'
import { readData, writeData } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string

    if (!id) {
      return res.status(400).json({ error: 'ID é obrigatório' })
    }

    const items = await readData()
    const newItems = items.filter(item => item.id !== id)

    if (newItems.length === items.length) {
      return res.status(404).json({ error: 'Item não encontrado' })
    }

    await writeData(newItems)
    return res.status(204).send()
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao deletar item' })
  }
}
