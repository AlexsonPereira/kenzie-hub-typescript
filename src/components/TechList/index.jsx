import { useContext, useEffect } from "react"
import { ModalTechContext } from "../../contexts/ModalContext"
import { ItemTech } from "../ItemTech"
import { TechContent } from "./style"

export const TechList = ({}) => {
   const {setShowModal,techs} = useContext(ModalTechContext)
   useEffect(()=>{
      console.log(techs)
   },[techs])

   return (
      <TechContent>
         <header>
            <h3>Tecnologias</h3>
            <button onClick={()=> setShowModal(true)} type="button" >+</button>
         </header>
         <ul>
            { techs.length != 0 ?
            techs.map(item => <ItemTech techName={item.tech} level={item.level}/>)
             :
            <h3>Não tem tecnologias adicionadas</h3>
            }  
         </ul> 
      </TechContent>
   )
}