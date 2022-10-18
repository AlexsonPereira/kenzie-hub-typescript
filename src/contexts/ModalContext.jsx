import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { TechContext } from "./TechContext";

export const ModalTechContext = createContext({})

const ModalTechProvider = ({children}) => {
   const {techs, setTechs} = useContext(TechContext)
   const [showModal, setShowModal] = useState(null)
   const onSubmit = data => addTech(data)
   function addTech(data) {
      api.post("/users/techs",data)
      .then(res => {
         toast.success('Tecnologia adicionada com sucesso', {
            position: 'top-right',
            autoClose: 1500,
            theme: 'dark'
          })
          setShowModal(false)
         api.get("/profile")
         .then(res => setTechs(res.data.techs))
      })
      .catch(err => console.log(err))
      

   }

   return (
      <ModalTechContext.Provider value={{showModal,setShowModal,onSubmit}}>
         {children}
      </ModalTechContext.Provider>
   )
}

export default ModalTechProvider 