import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'
import { uri } from '@/pages/api/_config/env'

let client: MongoClient
let db: Db

interface IVehicle {
  modelo: string
  anoFabricacao: number
  marca: string
  quantidadePortas?: number
  passageiros?: number
  rodas?: number
}

const connectDatabase = async () => {
  try {
    client = await MongoClient.connect(uri)
    db = client.db()
  } catch (error) {
    throw new Error('Erro ao conectar ao MongoDB.')
  }
}

const saveVehicle = async (veiculo: IVehicle) => {
  try {
    const veiculoCollection = db.collection('veiculos')
    await veiculoCollection.insertOne(veiculo)
  } catch (error) {
    throw new Error('Erro ao salvar veículo.')
  }
}

const readVehicle = async (): Promise<IVehicle[] | null> => {
  try {
    const veiculoCollection = db.collection<IVehicle>('veiculos')
    const veiculo = await veiculoCollection.find()
    return veiculo.toArray()
  } catch (error) {
    throw new Error('Erro ao ler veículo.')
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDatabase()

  if (req.method === 'POST') {
    try {
      const veiculo: IVehicle = req.body
      await saveVehicle(veiculo)
      res.status(200).json({ message: 'Veículo salvo com sucesso.' })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao salvar veículo.' })
    }
  } else if (req.method === 'GET') {
    try {
      const veiculo = await readVehicle()
      if (veiculo) {
        res.status(200).json(veiculo)
      } else {
        res.status(404).json({ message: 'Veículo não encontrado.' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao ler veículo.' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' })
  }
}
