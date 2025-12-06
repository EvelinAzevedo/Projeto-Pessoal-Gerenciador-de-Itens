import { Request, Response } from 'express'
import { readData } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const items = await readData()
    return res.json(items)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao recuperar itens' })
  }
}
