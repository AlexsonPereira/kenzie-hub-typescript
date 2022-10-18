import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginContext = createContext({})

export const LoginProvider = ({children}) => {

   const [visible,setVisible] = useState(false)
   const [type,setType ] = useState("password")
   
   let navigate = useNavigate();
   useEffect(()=>{
      if(!!localStorage.getItem("@KenzieHub-Token")){  
         navigate("/home")
      }
   },[])

   const sucess = () => toast.success('Login Feito com sucesso', {
      position: "top-right",
      autoClose: 1500,
      theme: "dark"
      });
   const error = () => toast.error('Falha ao fazer cadastro', {
      position: "top-right",
      autoClose: 1500,
      theme: "dark"
      });

   const onSubmit = data => {
      api.post("/sessions", data)
      .then(res => {
         sucess()
         localStorage.setItem("@KenzieHub-Token",res.data.token)
         localStorage.setItem("@KenzieHub-UserID",res.data.user.id)
         navigate("home")
         
      })
      .catch(err => {error();console.log(err)})
   }

   const ShowPassword = () => {
      setVisible(!visible)
      if(type === "password"){
         setType("text")
      }else{
         setType("password")
      }
   }
   return(
      <LoginContext.Provider value={{onSubmit,type,visible,ShowPassword}}>
         {children}
      </LoginContext.Provider>
   )
}