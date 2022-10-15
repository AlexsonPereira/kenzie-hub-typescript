import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../validations/loginUser";
import { BsEye, BsEyeSlash } from "react-icons/bs" 
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { LoginFormStyle } from "./style";
import { InputPrimary } from "../InputPrimary/style";
import { ButtonPrimary } from "../ButtonPrimary/style";

export const FormLogin = () => {
   
   const [visible,setVisible] = useState(false)
   const [type,setType ] = useState("password")

   useEffect(()=>{
      if(!!localStorage.getItem("@KenzieHub-Token")){  
         navigate("/home")
      }
   },[])

   let navigate = useNavigate();

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


   const ShowPassword = () => {
      setVisible(!visible)
      if(type === "password"){
         setType("text")
      }else{
         setType("password")
      }
   }

   const onSubmit = data => {
      api.post("/sessions", data)
      .then(res => {
         sucess()
         localStorage.setItem("@KenzieHub-Token",res.data.token)
         localStorage.setItem("@KenzieHub-UserID",res.data.user.id)
         navigate("home")
         
      })
      .catch(err => {error();console.log(err)})
};

   const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

   return (
      <LoginFormStyle onSubmit={handleSubmit(onSubmit)}>
         <h3>Inicio</h3>
         <div>
            <label>Email</label>
            <InputPrimary {...register("email")} placeholder="example@mail.com" type="email" />
            <p>{errors.email?.message}</p>      
         </div>
         <div>
            <label>Senha</label>
            <div className="passInput">
               <InputPrimary {...register("password")} type={type} placeholder="Digite sua senha" /> 
               {visible ?<BsEyeSlash onClick={() => ShowPassword()}/>:<BsEye onClick={() => ShowPassword()}/>} 
            </div>
            <p>{errors.password?.message}</p>
         </div>
         <ButtonPrimary type="submit">Entrar</ButtonPrimary>      
     </LoginFormStyle>
   )
}