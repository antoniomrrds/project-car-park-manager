import * as yup from 'yup'

export const yupValidation = yup.object().shape({
  modelo: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'O modelo deve ter no mínimo 3 caracteres'),
  anoFabricacao: yup
    .number()
    .max(
      new Date().getFullYear(),
      'O ano de fabricação não pode ser maior que o ano atual'
    )
    .min(0, 'O ano de fabricação não pode ser menor que 0')
    .typeError('O ano de fabricação deve ser um número')
    .required('Campo obrigatório')
    .positive('O ano de fabricação deve ser maior que 0'),
  quantidadePortas: yup.number().when('tipoVeiculo', {
    is: 'carro',
    then: (schema) =>
      schema
        .required('Campo obrigatório')
        .positive('A quantidade de portas deve ser maior que 0')
        .integer('A quantidade de portas deve ser um número inteiro')
        .max(4, 'A quantidade de portas deve ser no máximo 4')
        .min(2, 'A quantidade de portas deve ser no mínimo 2')
  }),
  marca: yup.string().required('Campo obrigatório'),
  passageiros: yup.number().when('tipoVeiculo', {
    is: 'moto',
    then: (schema) =>
      schema
        .required('Campo obrigatório')
        .positive('A quantidade de passageiros deve ser maior que 0')
        .max(2, 'A quantidade de passageiros deve ser no máximo 2')
        .min(1, 'A quantidade de passageiros deve ser no mínimo 1')
  }),
  tipoVeiculo: yup.string().required('Campo obrigatório')
})
