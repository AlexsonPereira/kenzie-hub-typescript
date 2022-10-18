import { toast } from 'react-toastify'

export const sucess = msg =>
  toast.success(msg, {
    position: 'top-right',
    autoClose: 1500,
    theme: 'dark'
  })
export const error = msg =>
  toast.error(msg, {
    position: 'top-right',
    autoClose: 1500,
    theme: 'dark'
  })
