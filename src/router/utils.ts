import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(__dirname, '../data.json')

export interface Item {
  id: string
  name: string
}

export async function readData(): Promise<Item[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function writeData(data: Item[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}