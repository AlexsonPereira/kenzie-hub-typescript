import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email('Deve ser um e-mail válido').required('Email é obrigatório'),
    password: yup.string().matches(/.{6,}/, 'Deve ter no minimo 8 digitos').required('Senha é obrigatória'),
    confirmPassword: yup
      .string()
      .matches(/.{6,}/, 'Deve ter no minimo 8 digitos')
      .required('Senha é obrigatória')
      .oneOf([yup.ref('password')], 'Senha não são iguais'),
    bio: yup.string().required('Campo obrigatorio'),
    contact: yup.string().required('Campo obrigatorio'),
    course_module: yup.string().required('')
  })
  .required()
