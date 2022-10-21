import { createContext } from 'react'
import { api } from  "../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }) => {
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
  <RegisterContext.Provider value={{onsubmit}}>
    {children}
  </RegisterContext.Provider>
  )       
}


