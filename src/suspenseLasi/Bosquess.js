import React , {Suspense , lazy} from "react"
import  MostrarMateria from "../pages/mostrarMateria"
import '../styles/blog.css'
import "../styles/examenes.css"
const Biodi = lazy(()=> import("../pages/bosques"))

const BosquesLaze =()=>{
    return(
    <div>
        <Suspense fallback = {<MostrarMateria/>}>
                   <Biodi/>
        </Suspense>
    </div>
    )
}


export default BosquesLaze