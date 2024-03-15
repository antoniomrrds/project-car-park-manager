import { IVeiculo } from '@/components/vehicle-form/ports'

export type quantPorts = 2 | 3 | 4
export class Carro implements IVeiculo {
  modelo: string
  anoFabricacao: number
  marca: string
  quantidadePortas: quantPorts
  constructor(props: IVeiculo & { quantidadePortas: quantPorts }) {
    this.modelo = props.modelo
    this.anoFabricacao = props.anoFabricacao
    this.marca = props.marca
    this.quantidadePortas = props.quantidadePortas
  }
}

export type quantPassageiros = 1 | 2
export class Moto implements IVeiculo {
  modelo: string
  anoFabricacao: number
  marca: string
  rodas = 2
  passageiros: quantPassageiros

  constructor(props: IVeiculo & { passageiros: quantPassageiros }) {
    this.modelo = props.modelo
    this.anoFabricacao = props.anoFabricacao
    this.marca = props.marca
    this.passageiros = props.passageiros
  }
}
