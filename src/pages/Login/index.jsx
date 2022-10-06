import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { LoginPage } from "./style"

export const Login = () => {
   return (
      <LoginPage>
         <Logo>Kenzie Hub</Logo>
         <div>
            <form>
               <h3>Inicio</h3>
               <div>
                  <label>Email</label>
                  <input type="email" />
               </div>
               <div>
                  <label>Senha</label>
                  <input type="password" />  
               </div>
               <button type="submit">Entrar</button>
            </form>
            <div>
               <p>Ainda não possui uma conta?</p>
               <Link to={"/register"}>
                  <button>Cadastre-se</button>
               </Link>
            </div>
         </div>
     </LoginPage>
   )
}


