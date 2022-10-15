import { useState } from "react"
import { ItemTech } from "../ItemTech"
import { TechContent } from "./style"

export const TechList = ({}) => {
   const [techs, setTechs] = useState([])

   return (
      <TechContent>
         <header>
            <h3>Tecnologias</h3>
            <button type="button" >+</button>
         </header>
         <ul>
            { techs.length != 0 ? 
            <ItemTech/> :
            <h3>Não tem tecnologias adicionadas</h3>
            }  
         </ul> 
      </TechContent>
   )
}