import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { RegisterPage } from "./style"
import { FormRegister } from "../../components/FormRegister";

export const Register = () => {
   return (
      <RegisterPage>
         <div>
            <div>
               <Logo>Kenzie Hub</Logo>
               <Link to={"/"}>
                  Voltar
               </Link>
            </div>
            <div>
               <div>
                  <h3>Crie sua conta</h3>
                  <span>Rapido e grátis, vamos nessa</span>
               </div>
               <FormRegister/>
            </div>
         </div>
      </RegisterPage>
   )
}