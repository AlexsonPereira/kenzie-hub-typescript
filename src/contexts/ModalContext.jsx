import { createContext, useState } from "react";

export const ModalTechContext = createContext({})

const ModalTechProvider = ({children}) => {
   const [showModal, setShowModal] = useState(null)
   const [techs, setTechs] = useState([])

   return (
      <ModalTechContext.Provider value={{showModal,setShowModal,techs,setTechs}}>
         {children}
      </ModalTechContext.Provider>
   )
}

export default ModalTechProvider 