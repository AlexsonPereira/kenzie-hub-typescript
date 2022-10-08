import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { LoginPage } from "./style"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai" 
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";


const schema = yup.object({
   email: yup.string().email('Deve ser um e-mail válido').required('Email é obrigatório'),
   password: yup.string().matches(/.{6,}/, 'Deve ter no minimo 8 digitos').required('Senha é obrigatória'),
 }).required();


export const Login = () => {

   useEffect(()=>{
      if(!!localStorage.getItem("@KenzieHub-Token")){  
         navigate("/home")
      }
   },[])

   let navigate = useNavigate();

   const sucess = () => toast.success('Login Feito com sucesso', {
      position: "top-right",
      autoClose: 1500,
      });
   const error = () => toast.error('Falha ao fazer cadastro', {
      position: "top-right",
      autoClose: 1500,
      });

   const [visible,setVisible] = useState(false)
   const [type,setType ] = useState("password")

   const ShowPassword = () => {
      setVisible(!visible)
      if(type === "password"){
         setType("text")
      }else{
         setType("password")
      }
   }

   const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

    
   const onSubmit = data => {
         api.post("/sessions", data)
         .then(res => {
            sucess()
            localStorage.setItem("@KenzieHub-Token",res.data.token)
            localStorage.setItem("@KenzieHub-UserID",res.data.user.id)
            setTimeout(()=>{
               navigate("home")
            },1500)
         })
         .catch(err => {error();console.log(err)})
   };

   return (
      <LoginPage>
         <Logo>Kenzie Hub</Logo>
         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <h3>Inicio</h3>
               <div>
                  <label>Email</label>
                  <input {...register("email")} type="email" />
                  <p>{errors.email?.message}</p>
               </div>
               <div>
                  <label>Senha</label>
                  <div className="passInput">
                     <input {...register("password")} type={type} /> 
                     {visible ?<AiFillEyeInvisible onClick={() => ShowPassword()}/>:<AiFillEye onClick={() => ShowPassword()}/>} 
                  </div>
                  <p>{errors.password?.message}</p>
               </div>
               <button type="submit">Entrar</button>
            </form>
            <div>
               <p onClick={sucess}>Ainda não possui uma conta?</p>
               <Link to={"/register"}>
                  <button>Cadastre-se</button>
               </Link>
            </div>
         </div>
     </LoginPage>
   )
}


