import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { LoginPage } from "./style"
import { FormLogin } from "../../components/FormLogin"


export const Login = () => {
   return (
      <LoginPage>
         <Logo>Kenzie Hub</Logo>
         <div>
            <FormLogin/>
            <div>
               <p>Ainda não possui uma conta?</p>
               <Link to={"/register"}>
                  Cadastre-se
               </Link>
            </div>
         </div>
     </LoginPage>
   )
}


