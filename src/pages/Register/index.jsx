import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"
import { RegisterPage } from "./style"

export const Register = () => {
   return (
      <RegisterPage>
         <div>
            <div>
               <Logo>Kenzie Hub</Logo>
               <Link to={"/"}>
                  <button type="button">Voltar</button>
               </Link>
            </div>
            <div>
               <div>
                  <h3>Crie sua conta</h3>
                  <span>Rapido e grátis, vamos nessa</span>
               </div>
               <form>
                  <label htmlFor="name">Nome</label>
                  <input placeholder="Digite aqui seu nome" id="name" type="text" />
                  <label htmlFor="email">Email</label>
                  <input placeholder="Digite aqui seu email" id="email" type="email" />
                  <label htmlFor="senha">Senha</label>
                  <input placeholder="Digite aqui sua senha" id="senha" type="password" />
                  <label htmlFor="cSenha">Confirmar Senha</label>
                  <input placeholder="Digite novamente sua senha" id="cSenha" type="passoword" />
                  <label htmlFor="bio">Bio</label>
                  <input placeholder="Fale sobre você" id="bio" type="text" />
                  <label htmlFor="contact">Contato</label>
                  <input placeholder="Opção de contato" id="contact" type="text" />
                  <label htmlFor="module">Selecionar modulo</label>
                  <select name="module" id="module">
                     <option value="">Primeiro Modulo</option>
                     <option value="">Segundo Modulo</option>
                     <option value="">Terceiro Modulo</option>
                     <option value="">Quarto Modulo</option>
                     <option value="">Quinto Modulo</option>
                     <option value="">Sexto Modulo</option>
                  </select>
                  <button type="submit">Cadastrar</button>
               </form>
            </div>
         </div>
      </RegisterPage>
   )
}