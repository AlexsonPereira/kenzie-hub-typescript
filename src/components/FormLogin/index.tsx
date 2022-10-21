import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../validations/loginUser";
import { BsEye, BsEyeSlash } from "react-icons/bs" 
import { LoginFormStyle } from "./style";
import { InputPrimary } from "../InputPrimary/style";
import { ButtonPrimary } from "../ButtonPrimary/style";
import { LoginContext } from "../../contexts/LoginContext";
import { useContext } from "react";

export const FormLogin = () => {
   const {onSubmit,type,visible,showPassword} = useContext(LoginContext)
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
               {visible ? <BsEyeSlash onClick={() => showPassword()}/> : <BsEye onClick={() => showPassword()}/>} 
            </div>
            <p>{errors.password?.message}</p>
         </div>
         <ButtonPrimary type="submit">Entrar</ButtonPrimary>      
     </LoginFormStyle>
   )
}