import { IVeiculo } from '@/components/vehicle-form/ports'
import axios from 'axios'

export const createVehicle = async (data: IVeiculo) => {
  try {
    return await axios.post('/api/vehicle', { data })
  } catch (error) {
    console.error('Erro ao criar veículo:', error)
  }
}

export const readVehicle = async () => {
  try {
    return await axios.get('/api/vehicle')
  } catch (error) {
    console.error('Erro ao criar veículo:', error)
  }
}
