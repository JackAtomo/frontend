import React, { componets } from "react";
import { useAuth } from "../commons/auth/auth-context";
import {useForm} from "react-hook-form";

function Registrase(){
    const {signUp} = useAuth();
    const {handleSubmit, setError, formState} = useForm({
        mode : "onBlur"
    })

    const handlesignUp = FormData =>{
        return signUp(FormData).catch(error => {
            if (error.response.status === 409){
                setError(
                    "email",
                    "conflict",
                    "The email already exists."
                )
            }
        })
    }
return (
    <React.Fragment>
        <form id="registro" onSubmit={handleSubmit(handlesignUp)}>
            <div id="regis">
        <fieldset>
            <label for="firstName">Nombre</label>
                 <input type="text" id="firstName"/>
            <label for="lastName">Apellidos</label>
                 <input type="text" id="lastName"/>
            <label for="phone">Telefono</label>
                 <input type="text" id="phone"/>
            <label for="DOB">Fecha de nacimiento</label>
                 <input type="date" id="DOB"/>
            <label for="gender">Genero</label>
                 <select id="gender">
                     <option value="0">Mujer</option>
                    <option value="1">Hombre</option>
                </select>
        </fieldset>
        <fieldset>
            <label for="email">Email</label>            
                 <input type="email" id="email"/>
            <label for="password">Password</label>            
                 <input type="password" id="password"/>
            <label for="address">Direccion</label>
                 <input type="text" id="address"/>
            <label for="postalCode">Codigo Postal</label>
                 <input type="text" id="postalCode"/>
            <label for="borIn">Lugar de nacimiento</label>   
                 <select id="borIN">
                     <option>Spain</option>
                     <option>Other</option>
                 </select>
        </fieldset>
        </div>
        <button id="registrarse" type="submit"
        disabled={formState.isSubmitting}>
        Registrarse
        </button>
        </form>
</React.Fragment>
)

}
export default Registrase;