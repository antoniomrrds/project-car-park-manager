import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  FormContainer,
  FormGroup,
  Label,
  Title
} from '@/components/vehicle-form/styled'
import { yupValidation } from '@/components/vehicle-form/validation'
import { Error } from '@/components/vehicle-form/errors'
import {
  Carro,
  Moto,
  quantPassageiros,
  quantPorts
} from '@/components/vehicle-form/vehicle'
import { createVehicle, readVehicle } from '@/utils/'
import { toast } from 'react-toastify'

type IVeiculoForm = {
  modelo: string
  anoFabricacao: number
  marca: string
  quantidadePortas?: number
  passageiros?: number
  tipoVeiculo?: string
}

const VehicleForm = () => {
  useState(async () => {
    try {
      const response = await readVehicle()
      console.log(response?.data)
    } catch (error) {
      console.error('Erro ao ler veículo:', error)
    }
  })

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(yupValidation)
  })
  const submitForm: SubmitHandler<IVeiculoForm> = async (data) => {
    let vehicle

    switch (data.tipoVeiculo) {
      case 'carro':
        vehicle = new Carro({
          quantidadePortas: data.quantidadePortas as quantPorts,
          marca: data.marca,
          modelo: data.modelo,
          anoFabricacao: data.anoFabricacao
        })
        await createVehicle(vehicle)
        toast.success('Veículo cadastrado com sucesso!')

        break

      case 'moto':
        vehicle = new Moto({
          passageiros: data.passageiros as quantPassageiros,
          marca: data.marca,
          modelo: data.modelo,
          anoFabricacao: data.anoFabricacao
        })
        await createVehicle(vehicle)
        toast.success('Veículo cadastrado com sucesso!')
        break
      default:
        break
    }
  }

  const tipoVeiculo = useWatch({
    control,
    name: 'tipoVeiculo'
  })

  return (
    <FormContainer>
      <Title>Cadastrar Veículo</Title>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormGroup>
          <Label>Modelo:</Label>
          <Controller
            name="modelo"
            defaultValue=""
            control={control}
            render={({ field }) => <input {...field} />}
          />
          <Error errors={errors} value="modelo" />
        </FormGroup>
        <FormGroup>
          <Label>Ano de Fabricação:</Label>
          <Controller
            name="anoFabricacao"
            control={control}
            defaultValue={0}
            render={({ field }) => <input type="number" {...field} />}
          />
          <Error errors={errors} value="anoFabricacao" />
        </FormGroup>
        {tipoVeiculo === 'moto' && (
          <FormGroup>
            <Label>Quantidade de Passageiros:</Label>
            <Controller
              name="passageiros"
              control={control}
              defaultValue={1}
              render={({ field }) => (
                <select {...field}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              )}
            />

            <Error errors={errors} value="passageiros" />
          </FormGroup>
        )}

        {tipoVeiculo === 'carro' && (
          <FormGroup>
            <Label>Quantidade de Portas:</Label>
            <Controller
              name="quantidadePortas"
              defaultValue={2}
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              )}
            />

            <Error errors={errors} value="quantidadePortas" />
          </FormGroup>
        )}

        <FormGroup>
          <Label>Tipo de Veículo:</Label>
          <Controller
            name="tipoVeiculo"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value=""></option>
                <option value="moto">Moto</option>
                <option value="carro">Carro</option>
              </select>
            )}
          />
          <Error errors={errors} value="tipoVeiculo" />
        </FormGroup>

        <FormGroup>
          <Label>Marca:</Label>
          <Controller
            name="marca"
            control={control}
            defaultValue=""
            render={({ field }) => <input type="text" {...field} />}
          />
          <Error errors={errors} value="marca" />
        </FormGroup>
        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  )
}

export { VehicleForm }
