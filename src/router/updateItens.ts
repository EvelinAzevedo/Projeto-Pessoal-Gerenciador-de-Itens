import { Request, Response } from 'express'
import { readData, writeData, Item } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string
    const name = req.query.name as string

    if (!id || !name || name.trim() === '') {
      return res.status(400).json({ error: 'ID e novo nome são obrigatórios' })
    }

    const items: Item[] = await readData()
    const index = items.findIndex(item => item.id === id)

    if (index === -1) {
      return res.status(404).json({ error: 'Item não encontrado' })
    }

    items[index].name = name
    await writeData(items)

    return res.json(items[index])
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao atualizar item' })
  }
}
