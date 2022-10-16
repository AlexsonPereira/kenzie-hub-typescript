import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { ModalTechContext } from "../../contexts/ModalContext"
import { ButtonPrimary } from "../ButtonPrimary/style"
import { InputPrimary } from "../InputPrimary/style"
import { SelectPrimary } from "../SelectPrimary/style"
import { ModalStyle } from "./style"

export const Modal = ({}) => {

   const {setShowModal,techs,setTechs} = useContext(ModalTechContext)
   const {register, handleSubmit} = useForm()
   const onSubmit = data => setTechs([...techs,data])

   return (
      <ModalStyle>
         <div className="modal">
            <div>
                <h3>Cadastrar Tecnologia</h3>
                <AiOutlineCloseCircle onClick={() => setShowModal(false)} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label>Nome</label>
                  <InputPrimary {...register("tech")} type="text"/>
               </div>
               <div>
                  <label>Selecionar Status</label>
                  <SelectPrimary {...register("level")}>
                     <option value="Iniciante">Iniciante</option>
                     <option value="Intermediario">Intermediario</option>
                     <option value="Avançado">Avançado</option>
                  </SelectPrimary>
               </div>
               <ButtonPrimary type="submit">Cadastrar Tecnologia</ButtonPrimary>
            </form>
         </div>
      </ModalStyle>
   )
}