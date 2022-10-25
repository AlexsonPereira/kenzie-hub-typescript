import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { ModalTechContext } from "../../contexts/ModalContext"
import { schema } from "../../validations/modalTech"
import { ButtonPrimary } from "../ButtonPrimary/style"
import { InputPrimary } from "../InputPrimary/style"
import { SelectPrimary } from "../SelectPrimary/style"
import { ModalStyle } from "./style"

interface IModalTech {
   title : string;
   status : string;

}

export const Modal = ({}) => {

   const {setShowModal,onSubmit} = useContext(ModalTechContext)
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<IModalTech>({
        resolver: yupResolver(schema)
      })

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
                  <InputPrimary {...register("title")} type="text"/>
                  <p className="yup">{errors.title?.message}</p>
               </div>
               <div>
                  <label>Selecionar Status</label>
                  <SelectPrimary {...register("status")}>
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