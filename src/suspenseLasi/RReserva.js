import React , {Suspense , lazy} from "react"
import  MostrarMateria from "../pages/mostrarMateria"

const Log = lazy(()=> import("../pages/reservas"))

const Reservass =()=>{
    return(
    <div>
        <Suspense fallback = {<MostrarMateria/>}>
                   <Log/>
        </Suspense>
    </div>
    )
}


export default Reservass