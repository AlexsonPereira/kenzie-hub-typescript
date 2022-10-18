import { BiTrash } from "react-icons/bi"
import { LiTech } from "./style"

export const ItemTech = ({techName,level,deleteTech,id}) => {
   return (
      <LiTech key={id}>
         <h4>{techName}</h4>
         <div>
            <p>{level}</p>
            <BiTrash onClick={()=> deleteTech(id)}/>
         </div>
      </LiTech>
   )
}