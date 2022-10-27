import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { sucess } from "../toast";
import { ModalTechContext } from "./ModalContext";

interface ITechProviderProps {
   children : ReactNode
}

export interface ITech{
   id: number
   title: string; 
   status : string;
}

interface ITechContext {
   techs : ITech[];
   deleteTech : (id:string) => void;
   setTechs : React.Dispatch<React.SetStateAction<ITech[]>>
}

interface ITechResponse {
   techs : ITech[]
}

export const TechContext = createContext<ITechContext>({} as ITechContext)

export const TechProvider = ({children}:ITechProviderProps) => {
   const {} = useContext(ModalTechContext)
   const [techs, setTechs] = useState<ITech[]>([])
   

   useEffect(()=>{
      async function loadTechs (){
         try {
            const token = localStorage.getItem('@KenzieHub-Token')
            api.defaults.headers.authorization = `Bearer ${token}`;
            const {data} = await api.get<ITechResponse>("/profile")
            setTechs(data.techs)
         } catch (error) {
            console.log(error)         
         }       
      }
      loadTechs()
   },[])

   const deleteTech = (id:string) => {
      const token = localStorage.getItem('@KenzieHub-Token')
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.delete(`/users/techs/${id}`)
      .then(() => {
         sucess('Tecnologia removida com sucesso')
          api.get<ITechResponse>("/profile")
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