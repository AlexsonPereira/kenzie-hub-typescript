import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email('Deve ser um e-mail válido').required('Email é obrigatório'),
    password: yup.string().matches(/.{6,}/, 'Deve ter no minimo 8 digitos').required('Senha é obrigatória')
  })
  .required()
