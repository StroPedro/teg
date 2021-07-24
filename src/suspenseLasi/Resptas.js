import React , {Suspense , lazy} from "react"
import  MostrarMateria from "../pages/mostrarMateria"

const Log = lazy(()=> import("../pages/Respuestas"))

const Resptas =()=>{
    return(
    <div>
        <Suspense fallback = {<MostrarMateria/>}>
                <Log/>
        </Suspense>
    </div>
    )
}


export default Resptas