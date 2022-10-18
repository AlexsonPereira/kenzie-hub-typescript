import { useContext, useEffect } from "react"
import { ModalTechContext } from "../../contexts/ModalContext"
import { TechContext } from "../../contexts/TechContext"
import { ItemTech } from "../ItemTech"
import { TechContent } from "./style"

export const TechList = ({}) => {
   const {techs,deleteTech} = useContext(TechContext)
   const {setShowModal} = useContext(ModalTechContext)


   return (
      <TechContent>
         <header>
            <h3>Tecnologias</h3>
            <button onClick={()=> setShowModal(true)} type="button" >+</button>
         </header>
         <ul>
            { techs.length != 0 ?
            techs.map(item => <ItemTech deleteTech={deleteTech} techName={item.title} level={item.status} key={item.id} id={item.id}/>)
             : 
            <h3>Não tem tecnologias adicionadas</h3>
            } 
         </ul> 
      </TechContent>
   )
}