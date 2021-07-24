import React , {Suspense , lazy} from "react"
import  MostrarMateria from "../pages/mostrarMateria"
import '../styles/blog.css'
import "../styles/examenes.css"
const Biodi = lazy(()=> import("../pages/biodiversidad"))

const BiodiverLaze =()=>{
    return(
    <div>
        <Suspense fallback = {<MostrarMateria/>}>
                   <Biodi/>
        </Suspense>
    </div>
    )
}


export default BiodiverLaze