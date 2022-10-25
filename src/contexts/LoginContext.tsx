import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { error, sucess } from "../toast";

interface iUser {
   email : string;
   password : string;
}

interface iLoginProps {
   children : ReactNode
 }

interface ILoginContext{
   onSubmit : any;
   type : string;
   visible : boolean;
   showPassword : () => void; 

}
 

export const LoginContext = createContext<ILoginContext>({} as ILoginContext)

export const LoginProvider = ({children}:iLoginProps) => {

   const [visible,setVisible] = useState(false)
   const [type,setType ] = useState<"password" | "text">("password")
   
   const navigate = useNavigate();
   useEffect(()=>{
      if(!!localStorage.getItem("@KenzieHub-Token")){  
         navigate("/home")
      }
   },[])

   const onSubmit = (data:iUser) => {
      api.post("/sessions", data)
      .then(res => {
         sucess("Sucesso ao realizar login")
         localStorage.setItem("@KenzieHub-Token",res.data.token)
         localStorage.setItem("@KenzieHub-UserID",res.data.user.id)
         navigate("home")
         
      })
      .catch(err => {error("Erro ao realizar login");console.log(err)})
   }

   const showPassword = () => {
      setVisible(!visible)
      if(type === "password"){
         setType("text")
      }else{
         setType("password")
      }
   }

   return(
      <LoginContext.Provider value={{onSubmit,type,visible,showPassword}}>
         {children}
      </LoginContext.Provider>
   )
}