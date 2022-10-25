import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ITech, TechContext } from "./TechContext";

interface IModalProviderProps {
   children: ReactNode
}

interface IModalContext {
   showModal : any
   setShowModal : any
   onSubmit : any
}

export const ModalTechContext = createContext<IModalContext>({} as IModalContext)

const ModalTechProvider = ({children}:IModalProviderProps) => {
   const {techs, setTechs} = useContext(TechContext)
   const [showModal, setShowModal] = useState<boolean | null>(null)
   const onSubmit = (data:ITech) => addTech(data)
   function addTech(data:ITech) {
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