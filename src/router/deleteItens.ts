import { Request, Response } from 'express'
import { readData, writeData, Item } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string

    if (!id) {
        return res.status(400).json({ error: 'ID é obrigatório' })
    }

    const items = await readData()
    const filteredItems = items.filter((item: Item) => item.id !== id)

    if (filteredItems.length === items.length) {
        return res.status(404).json({ error: 'Item não encontrado' })
    }

    await writeData(filteredItems)
    res.json({ message: 'Item deletado' })
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar item' })
  }
}