import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'public/items.json') // raiz do projeto

export interface Item {
  id: string
  name: string
}

export async function readData(): Promise<Item[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, '[]', 'utf-8')
      return []
    }
    throw err
  }
}

export async function writeData(items: Item[]): Promise<void> {
  console.log('Gravando itens:', items, 'no arquivo:', DATA_FILE)
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), 'utf-8')
}
