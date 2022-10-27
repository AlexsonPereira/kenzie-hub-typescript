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
  course_module: string
}

interface IRegisterContext {
  onSubmitRegister : (data: iRegisterData) => void
}

interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  bio: string;
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

    const onSubmitRegister = (data:iRegisterData) => {
      api
        .post<IRegisterResponse>('/users', data)
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
  <RegisterContext.Provider value={{onSubmitRegister}}>
    {children}
  </RegisterContext.Provider>
  )       
}


