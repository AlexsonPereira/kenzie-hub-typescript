import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ModalTechContext } from "./ModalContext";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
   const {} = useContext(ModalTechContext)
   const [techs, setTechs] = useState([])
   

   useEffect(()=>{
      async function loadTechs (){
         try {
            const token = localStorage.getItem('@KenzieHub-Token')
            api.defaults.headers.authorization = `Bearer ${token}`;
            const data = await api.get("/profile")
            console.log(data)
            setTechs(data.data.techs)
         } catch (error) {
            console.log(error)         
         }       
      }
      loadTechs()
   },[])

   const deleteTech = (id) => {
      const token = localStorage.getItem('@KenzieHub-Token')
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.delete(`/users/techs/${id}`)
      .then(res => {
         toast.success('Tecnologia removida com sucesso', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'dark'
          })
          api.get("/profile")
          .then(res => {
            setTechs(res.data.techs)
          })
          .then(err => console.log(err))
      })
   }
   return (
      <TechContext.Provider value={{techs,setTechs,deleteTech}}>
         {children}
      </TechContext.Provider>
   )
}