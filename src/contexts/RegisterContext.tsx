import { createContext, ReactNode } from 'react'
import { api } from  "../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

interface iRegisterProps {
  children : ReactNode
}

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword : string;
  bio: string;
  contact: string;
  module: string
}

interface IRegisterContext {
  onSubmit : any
}

export const RegisterContext = createContext<IRegisterContext>({} as IRegisterContext)

export const RegisterProvider = ({ children }:iRegisterProps) => {
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

    const onSubmit = (data:iRegisterData) => {
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
  <RegisterContext.Provider value={{onSubmit}}>
    {children}
  </RegisterContext.Provider>
  )       
}


