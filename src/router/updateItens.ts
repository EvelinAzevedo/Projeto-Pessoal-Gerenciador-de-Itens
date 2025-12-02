import { Request, Response } from 'express'
import { readData, writeData, Item } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string
    const name = req.query.name as string

    if (!id) return res.status(400).json({ error: 'ID é obrigatório' })
    if (!name) return res.status(400).json({ error: 'Nome é obrigatório' })

    const items = await readData()
    const itemIndex = items.findIndex((item: Item) => item.id === id)

    if (itemIndex === -1) return res.status(404).json({ error: 'Item não encontrado' })

    items[itemIndex].name = name
    await writeData(items)
    res.json(items[itemIndex])
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item' })
  }
}