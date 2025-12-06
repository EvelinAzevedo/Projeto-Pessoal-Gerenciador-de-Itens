import { Request, Response } from 'express'
import { readData, writeData, Item } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string

    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Nome é obrigatório' })
    }

    const items: Item[] = await readData()

    const newItem: Item = {
      id: Date.now().toString(),
      name
    }

    items.push(newItem)
    await writeData(items)

    return res.status(201).json(newItem)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao criar item' })
  }
}
