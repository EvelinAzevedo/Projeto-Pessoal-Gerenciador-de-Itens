import { Request, Response } from 'express'
import { readData } from './utils'

export default async (req: Request, res: Response) => {
  try {
    const items = await readData()
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler dados' })
  }
}