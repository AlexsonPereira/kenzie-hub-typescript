import { BiTrash } from "react-icons/bi"
import { LiTech } from "./style"

export const ItemTech = ({techName,level}) => {
   return (
      <LiTech>
         <h4>{techName}</h4>
         <div>
            <p>{level}</p>
            <BiTrash/>
         </div>
      </LiTech>
   )
}