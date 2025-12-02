import { Request, Response } from 'express'
import { readData, writeData } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string

    if (!name) {
        return res.status(400).json({ error: 'Nome é obrigatório' })
    }

    const items = await readData()
    const newItem = { id: Date.now().toString(), name }
    items.push(newItem)
    await writeData(items)
    res.status(201).json(newItem)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar item' })
  }
}