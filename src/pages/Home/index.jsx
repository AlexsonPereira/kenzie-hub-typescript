import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { api } from "../../services/api"
import { HomePage } from "./style"

export const Home = () => {
   const [data,setData] = useState([])
   const navigate = useNavigate()
   useEffect(()=>{
      if(!localStorage.getItem("@KenzieHub-Token")){  
         navigate("/")
      }
      api.get(`/users/${localStorage.getItem("@KenzieHub-UserID")}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
   },[])

   const logout = () => {
      localStorage.clear()
      navigate("/")
   }

   return (
      <HomePage>
         <header>
            <div className="container">
               <div className="header">
                  <Logo>Kenzie Hub</Logo>
                  <button onClick={logout} type="button">Sair</button>
               </div>
            </div>
         </header>
         <main>
            <div className="ContentInitial">
               <div className="container">
                  <div>
                     <h3>Olá, {data.name}</h3>
                     <p>{data.course_module}</p>
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