import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { HomePage } from "./style"

export const Home = () => {
   return (
      <HomePage>
         <header>
            <div className="container">
               <div className="header">
                  <Logo>Kenzie Hub</Logo>
                  <Link to={"/"}>
                     <button type="button">Sair</button>
                  </Link>
               </div>
            </div>
         </header>
         <main>
            <div className="ContentInitial">
               <div className="container">
                  <div>
                     <h3>Ola,{"Alexson"}</h3>
                     <p>{"modulo"}</p>
                   </div>
               </div>
            </div>
            <div className="DevelopContent">
               <div className="container">
                  <div>
                     <h3>Que pena! Estamos em desenvolvimento :(</h3>
                     <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                  </div>
               </div>
            </div>
         </main>
      </HomePage>
   )
}