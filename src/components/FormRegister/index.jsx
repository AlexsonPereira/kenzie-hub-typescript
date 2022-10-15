import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { schema } from '../../validations/registerUser'
import { FormRegisterStyle } from './style'

export const FormRegister = () => {
  const navigate = useNavigate()

  const sucess = () =>
    toast.success('Cadastro feito com sucesso', {
      position: 'top-right',
      autoClose: 1500,
      theme: 'dark'
    })

  const error = () =>
    toast.error('Falha ao fazer cadastro', {
      position: 'top-right',
      autoClose: 1500,
      theme: 'dark'
    })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    api
      .post('/users', data)
      .then(res => {
        sucess()
        setTimeout(() => {
          navigate('/')
        }, 1500)
      })
      .catch(err => {
        error()
        console.log(err)
      })
  }

  return (
    <FormRegisterStyle onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nome</label>
      <input {...register('name')} placeholder="Digite aqui seu nome" id="name" type="text" />
      <p>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input {...register('email')} placeholder="Digite aqui seu email" id="email" type="email" />
      <p>{errors.email?.message}</p>
      <label htmlFor="senha">Senha</label>
      <input {...register('password')} placeholder="Digite aqui sua senha" id="senha" type="password" />
      <p>{errors.password?.message}</p>
      <label htmlFor="cSenha">Confirmar Senha</label>
      <input {...register('confirmPassword')} placeholder="Digite novamente sua senha" id="cSenha" type="password" />
      <p>{errors.confirmPassword?.message}</p>
      <label htmlFor="bio">Bio</label>
      <input {...register('bio')} placeholder="Fale sobre você" id="bio" type="text" />
      <p>{errors.bio?.message}</p>
      <label htmlFor="contact">Contato</label>
      <input {...register('contact')} placeholder="Opção de contato" id="contact" type="text" />
      <p>{errors.contact?.message}</p>
      <label htmlFor="module">Selecionar modulo</label>
      <select {...register('course_module')} name="module" id="module">
        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Modulo</option>
        <option value="Segundo módulo (Frontend Avançado)">Segundo Modulo</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Modulo</option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Modulo</option>
      </select>
      <button type="submit">Cadastrar</button>
    </FormRegisterStyle>
  )
}
