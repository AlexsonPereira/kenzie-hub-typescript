import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 5000,
  Headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('@KenzieHub-Token')}`
  }
})
