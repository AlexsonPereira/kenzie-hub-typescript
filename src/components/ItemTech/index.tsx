import { ReactElement } from "react";
import { BiTrash } from "react-icons/bi"
import { LiTech } from "./style"

interface IItemProp {
   techName: string;
   level : string;
   deleteTech : (id:number | any ) => void
   id : number
}

export const ItemTech = ({techName,level,deleteTech,id}:IItemProp) => {
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